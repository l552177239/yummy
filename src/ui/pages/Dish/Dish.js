import React from 'react'
import { connect } from 'react-redux'

import './dish.css'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'

class Dish extends React.Component {
  render() {
    if(Object.keys(this.props.dishes).length !== 0) {
      const { dishes } = this.props
      console.log('===+++===', dishes)
      const { dishId } = this.props.match.params
      let dish = dishes[dishId]
    return(
      <div className="dish">
        <TitleHeader title={dish.name} />
          <div className="dish-info">
            <div className="dish-img-wrap">
              <div style={{ 'backgroundImage' : `url(${dish.poster})`}}
                className="img">
              </div>
            </div>

          </div>
      </div>
    )
    }else{
    return null
    }
  }
}

const mapStateToProps = (state) => ({
  dishes: state.dish.all
})

export default connect(mapStateToProps)(Dish)
