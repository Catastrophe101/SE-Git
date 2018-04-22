var image_links = [
   {
    imageLink:"https://images.unsplash.com/photo-1464655646192-3cb2ace7a67e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=7bd13db3b64ce66833f51169e9e6e5e5"
  },
   {
    imageLink:"https://images.unsplash.com/photo-1426869981800-95ebf51ce900?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=93554fdd92a1a53e9dd8509a9b75ae53"
  },
   {
    imageLink:"https://images.unsplash.com/29/night-square.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=36e3089748ffd4e8a285318afb1a7a57"
  }
  ]
var SlideShow = React.createClass({
getInitialState:function(){ return {links:image_links,operator:"PLUS",pointer:0}},
updateList:function(e){
  var new_link = e.target.value,old_list = this.state.links;
  old_list.push({imageLink:new_link});
  this.setState({links:old_list})
  return console.log(old_list);
},
render:function(){
      var pointed_image = this.state.links[this.state.pointer];

      var image_style = { backgroundImage: 'url(' + pointed_image.imageLink + ')'};
      return (
        <div>
          <input type="text" placeholder="add image link" onChange={this.updateList}/>
            <div style={image_style} id="slide">
              </div>
        </div>
      )
},
componentDidMount:function(){
 var self = this;
 this.interval = setInterval(function(){
   var pointer = self.state.pointer,operator = self.state.operator;
   if(pointer === self.state.links.length-1){operator = "MINUS"}
   else if(pointer <= 0){operator = "PLUS"}
   operator === "PLUS"? pointer++:pointer--;
   return self.setState({pointer:pointer,operator:operator})
},4000)
}
})

ReactDOM.render(<SlideShow/>,document.getElementById("slide_show"))
