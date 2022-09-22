import '../../assets/css/css-items/search.css'

export const Search = () => {
    return (
    <div className='Search-div'>
      <form class="search-container">
        <input type="text" id="search-bar" placeholder="Busca"/><a href="#">
        <img class="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"/></a>
      </form>
    </div>
  )
}
