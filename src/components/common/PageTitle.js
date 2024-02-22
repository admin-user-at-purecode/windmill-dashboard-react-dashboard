import React from 'react'
import classNames from 'classnames'

function PageTitle({ children }) {
  return (
    <h1 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">{children}</h1>
  )
}

export function RoundIcon({
  icon: Icon,
  iconColorClass = 'text-purple-600 dark:text-purple-100',
  bgColorClass = 'bg-purple-100 dark:bg-purple-600',
  className,
}) {
  const baseStyle = 'p-3 rounded-full'

  const cls = classNames(baseStyle, iconColorClass, bgColorClass, className)
  return (
    <div className={cls}>
      <Icon className="w-5 h-5" />
    </div>
  )
}

export default PageTitle
