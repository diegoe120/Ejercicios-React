'use strict';

function LikeButton() {
    const [liked, setLiked] = React.useState(false);

    if (liked) {
        return "Te gusta esto!";
    }
}