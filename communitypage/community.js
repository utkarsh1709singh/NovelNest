document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const menuIcon = document.getElementById('menu-icon');
    const commentForm = document.getElementById('comment-form');
    const commentsContainer = document.querySelector('.comments');
    const commentSearch = document.getElementById('comment-search');

    menuIcon.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    commentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const commentText = document.getElementById('comment-text').value;
        const commentBook = document.getElementById('comment-book').value;

        if (commentText && commentBook) {
            const newComment = document.createElement('div');
            newComment.classList.add('comment');

            const commentHeader = document.createElement('div');
            commentHeader.classList.add('comment-header');

            const avatar = document.createElement('img');
            avatar.classList.add('avatar');
            avatar.src = getUserAvatar();  // Function to get the user avatar URL

            const bookTitle = document.createElement('div');
            bookTitle.classList.add('book-title');
            bookTitle.textContent = commentBook;

            const username = document.createElement('div');
            username.classList.add('username');
            username.textContent = getUsername();  // Function to get the username

            const text = document.createElement('div');
            text.classList.add('comment-text');
            text.textContent = commentText;

            const timestamp = document.createElement('div');
            timestamp.classList.add('timestamp');
            timestamp.textContent = new Date().toLocaleString();

            commentHeader.appendChild(avatar);
            commentHeader.appendChild(username);
            newComment.appendChild(commentHeader);
            newComment.appendChild(bookTitle);
            newComment.appendChild(text);
            newComment.appendChild(timestamp);
            commentsContainer.appendChild(newComment);

            commentForm.reset();
        }
    });

    commentSearch.addEventListener('input', (event) => {
        const filter = event.target.value.toLowerCase();
        const comments = commentsContainer.querySelectorAll('.comment');
        comments.forEach(comment => {
            const bookTitle = comment.querySelector('.book-title').textContent.toLowerCase();
            if (bookTitle.includes(filter)) {
                comment.style.display = 'block';
            } else {
                comment.style.display = 'none';
            }
        });
    });

    function getUserAvatar() {
        // Simulate getting the user avatar from a database or user profile
        const avatars = ['user1.jpg', 'user2.jpg', 'user3.jpg'];
        return avatars[Math.floor(Math.random() * avatars.length)];
    }

    function getUsername() {
        // Simulate getting the username from a database or user profile
        const usernames = ['John Doe', 'Jane Smith', 'Alice Johnson'];
        return usernames[Math.floor(Math.random() * usernames.length)];
    }
});





