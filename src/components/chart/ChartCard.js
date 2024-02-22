import React from 'react'

function Chart({ children, title }) {
  return (
    <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
      <p className="mb-4 font-semibold text-gray-800 dark:text-gray-300">{title}</p>
      {children}
    </div>
  )
}

export function ChartLegend({ legends }) {
  return (
    <div className="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400">
      {legends.map((legend) => (
        <div className="flex items-center" key={legend.title}>
          <span className={`inline-block w-3 h-3 mr-1 ${legend.color} rounded-full`}></span>
          <span>{legend.title}</span>
        </div>
      ))}
    </div>
  )
}


export default Chart
