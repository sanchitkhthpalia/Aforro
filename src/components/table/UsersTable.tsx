import React, { useState, useMemo, useEffect } from 'react';
import { useUsers } from '../../hooks/useUsers';
import { Search, ArrowUpDown } from 'lucide-react';

const UsersTable = () => {
  const { users, loading, error } = useUsers();
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [activeCity, setActiveCity] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);
    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    // Listen for the custom "clearFilters" event
    // Quick hack to avoid lifting state just for a single header button. A global event bus is fine here.
    const handleClear = () => {
      setQuery('');
      setActiveCity('all');
      setOrder('asc');
      setCurrentPage(1);
    };
    
    window.addEventListener('clearFilters', handleClear);
    return () => window.removeEventListener('clearFilters', handleClear);
  }, []);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedQuery, activeCity, order]);

  const availableCities = useMemo(() => 
    Array.from(new Set(users.map(u => u.address.city))).sort(), 
  [users]);

  const directoryData = useMemo(() => {
    let results = [...users];

    if (debouncedQuery) {
      const q = debouncedQuery.toLowerCase();
      results = results.filter(u => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q));
    }

    if (activeCity !== 'all') {
      results = results.filter(u => u.address.city === activeCity);
    }

    // Kept the sort locally since the JSONPlaceholder API doesn't support nested multi-field sorting natively.
    return results.sort((a, b) => 
      order === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
  }, [users, debouncedQuery, order, activeCity]);

  const totalPages = Math.ceil(directoryData.length / itemsPerPage);
  const paginatedData = directoryData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-4 w-full mt-4 border border-slate-100">
        <h2 className="text-base font-semibold text-slate-800 mb-4">User Directory</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-50 border-y border-slate-200 text-left text-xs font-semibold text-slate-600">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Company</th>
                <th className="px-4 py-2">City</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[...Array(5)].map((_, i) => (
                <tr key={i}>
                  <td className="px-4 py-3"><div className="h-4 bg-slate-200 rounded w-3/4 animate-pulse"></div></td>
                  <td className="px-4 py-3"><div className="h-4 bg-slate-200 rounded w-full animate-pulse"></div></td>
                  <td className="px-4 py-3"><div className="h-4 bg-slate-200 rounded w-2/3 animate-pulse"></div></td>
                  <td className="px-4 py-3"><div className="h-4 bg-slate-200 rounded w-1/2 animate-pulse"></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  if (error) return <div className="p-8 text-center text-red-500">Error: {error}</div>;

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 w-full mt-4 border border-slate-100">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-3">
        <h2 className="text-base font-semibold text-slate-800">User Directory</h2>
        
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
            <input 
              type="text" 
              placeholder="Search users..." 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-8 pr-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 w-48 lg:w-56"
            />
          </div>

          <select 
            value={activeCity}
            onChange={(e) => setActiveCity(e.target.value)}
            className="border border-slate-200 rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white"
          >
            <option value="all">All Cities</option>
            {availableCities.map(city => <option key={city} value={city}>{city}</option>)}
          </select>

          <button 
            onClick={() => setOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
            className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors"
          >
            <ArrowUpDown size={14} />
            Sort {order === 'asc' ? 'A-Z' : 'Z-A'}
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-50 border-y border-slate-200 text-left text-xs font-semibold text-slate-600">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Company</th>
              <th className="px-4 py-2">City</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs text-slate-600">
            {paginatedData.length > 0 ? (
              paginatedData.map(u => (
                <tr key={u.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-2 font-medium text-slate-800">{u.name}</td>
                  <td className="px-4 py-2">{u.email}</td>
                  <td className="px-4 py-2">{u.company.name}</td>
                  <td className="px-4 py-2">{u.address.city}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="px-4 py-4 text-center text-slate-500">No users found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-2">
          <p className="text-xs text-slate-500">
            Showing <span className="font-medium text-slate-800">{(currentPage - 1) * itemsPerPage + 1}</span> to <span className="font-medium text-slate-800">{Math.min(currentPage * itemsPerPage, directoryData.length)}</span> of <span className="font-medium text-slate-800">{directoryData.length}</span> results
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1.5 border border-slate-200 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-1.5 border border-slate-200 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersTable;
