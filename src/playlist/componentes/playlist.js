import React from 'react';
import Media from './media.js';
import './playlist.css';
import Play from '../../icons/components/play';
import FullScreen from '../../icons/components/full-screen';
import Pause from '../../icons/components/pause';
import Volume from '../../icons/components/volume';

function Playlist(props){
    const playlist = props.data.categories[0].playlist;
    console.log(props.data);
    return(
        <div className="Playlist">
            <Play
                size={50}
                color="red"/>
            <FullScreen size={50}
                        color="red"/>
            <Pause size={50}
                    color="red" />
            <Volume size={50}
                    color="red"/>
                    
            {
                playlist.map((item) => {
                    return <Media 
                                {...item}
                                key = {item.id}/>
                })
            }
            
        </div>
    )    
}

export default Playlist;