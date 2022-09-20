import '../../assets/css/css-items/box_items.css'

export const Box_post = (props) => {
    return (
        <div className="Box">
            <div className='text-box'>
                <div className='category'>{props.category}</div>
                <div className='title'>{props.title}</div>              
            </div>
            <div className='contect'>{props.contect}</div>
            <div className='barra-opcoes'>
                <button className='comment-button'>Comment</button>
            </div> 
        </div>
    )
}