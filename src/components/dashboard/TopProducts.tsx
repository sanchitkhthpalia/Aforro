import React from 'react';

const products = [
  { id: '01', name: 'Home Decor Range', popularity: 45, color: 'bg-blue-500', sales: '45%', salesColor: 'text-blue-500 border-blue-200 bg-blue-50' },
  { id: '02', name: 'Disney Princess Pink Bag 18\'', popularity: 29, color: 'bg-emerald-500', sales: '29%', salesColor: 'text-emerald-500 border-emerald-200 bg-emerald-50' },
  { id: '03', name: 'Bathroom Essentials', popularity: 18, color: 'bg-purple-500', sales: '18%', salesColor: 'text-purple-500 border-purple-200 bg-purple-50' },
  { id: '04', name: 'Apple Smartwatches', popularity: 25, color: 'bg-orange-400', sales: '25%', salesColor: 'text-orange-500 border-orange-200 bg-orange-50' },
];

const TopProducts = () => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 h-full">
      <h2 className="text-base font-semibold text-slate-800 mb-4">Top Products</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-[11px] uppercase tracking-wider text-slate-400 border-b border-slate-50">
              <th className="pb-2 font-medium">#</th>
              <th className="pb-2 font-medium">Name</th>
              <th className="pb-2 font-medium">Popularity</th>
              <th className="pb-2 font-medium text-right">Sales</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b border-slate-50 last:border-0">
                <td className="py-2.5 text-xs text-slate-500">{product.id}</td>
                <td className="py-2.5 text-xs font-medium text-slate-700 whitespace-nowrap">{product.name}</td>
                <td className="py-2.5 w-1/3">
                  <div className="w-full bg-slate-100 rounded-full h-1">
                    <div className={`${product.color} h-1 rounded-full`} style={{ width: `${product.popularity}%` }}></div>
                  </div>
                </td>
                <td className="py-2.5 text-right">
                  <span className={`inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold border ${product.salesColor}`}>
                    {product.sales}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopProducts;
