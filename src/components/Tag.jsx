import './Tag.css';

const Tag = ({tagName, selectTag, selected, no}) => {

  const tagStyle = {
      HTML : {backgroundColor: 'black', color: 'white'},
      CSS : {backgroundColor: 'purple', color: 'white'},
      Javascript : {backgroundColor: 'green', color: 'white'},
      React : {backgroundColor: 'tomato', color: 'white'},
      default :{backgroundColor: '#f9f9f9'},
  }
  // const tagColor = {
  //     HTML : 'red',
  //     CSS : 'aqua',
  //     Javascript : 'green',
  //     React : 'tomato',
  //     default :'#f9f9f9',
  // }

  return <button 
            type="button" 
            className="tag"
            style={selected ? tagStyle[tagName] : tagStyle.default}
            // style={{backgroundColor: selected ? tagColor[tagName] : tagColor.default }}
            onClick={()=> selectTag(tagName)}
          >
            {tagName} {no}
          </button>
};

export default Tag;
