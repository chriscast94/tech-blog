const commentFormHandler = async (event) => {
    event.PreventDefault();

    const commentText = document.querySelector("#comment-descr");
    const commentName = window.location.pathname;
    const commentPlace = pathName.split("/");
    const post_id = commentPlace[commentPlace.length - 1];

}

//Finish comment function