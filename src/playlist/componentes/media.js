import React, {PureComponent} from 'react';
import './media.css';
import PropTypes from 'prop-types';

class Media extends PureComponent {
    state = {
        author: 'valor por defecto'
    }
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         author : props.author
    //     }
    // }
    handleClick = (event) => {
        this.setState({
            author: 'Ricardo Celiz'
        });
    }
    render(){        
        return (
            <div className="Media" onClick={this.handleClick}>
                <div className="Media-cover">
                    <img
                        className="Media-image"
                        src={this.props.cover}
                        alt=""
                        width={240}
                        heigh={160}>
                    </img>
                    <h3 className="Media-title">
                            {this.props.title}
                    </h3>
                    <p className="Media-author">
                            {this.props.author}
                    </p>
                </div>
            </div>
        )
    }
}

Media.propTypes = {
    cover : PropTypes.string,
    title : PropTypes.string.isRequired,
    author: PropTypes.string,
    type: PropTypes.oneOf(['video','audio']),

}
export default Media;