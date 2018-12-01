import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dispatchAddFavorite } from '../store';


class Gifs extends Component {

  constructor() {
    super();
    this.setRedirect = this.setRedirect.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  setRedirect() {
    this.props.history.push('/favorites');
  }

  handleClick(url, e) {
    this.props.add_favorite(url);
  }

  render() {
    const urls = this.props.urls;
    return (
      <div>
        <div className='box'>
        {
          urls.map(url => (
            <div key={url} className='gifbox'>
              <button onClick={this.handleClick.bind(this, url)}><img src={url} alt='' /></button>
            </div>
          ))
        }
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    urls: state.search.urls
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add_favorite: (fave) => dispatch(dispatchAddFavorite(fave))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gifs);