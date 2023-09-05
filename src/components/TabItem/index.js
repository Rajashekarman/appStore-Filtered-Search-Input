import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {displayText, tabId} = tabDetails
  const onClickTabItem = () => {
    clickTabItem(tabId)
  }
  const activeTabItemClassName = isActive ? 'active-tab-btn' : ''
  return (
    <li>
      <button className={activeTabItemClassName} onClick={onClickTabItem}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
