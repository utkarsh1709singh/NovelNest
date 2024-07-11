document.addEventListener('DOMContentLoaded', function() {
    const wishlistForm = document.getElementById('wishlist-form');
    const wishlistContainer = document.getElementById('wishlist-container');

    wishlistForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const bookTitle = document.getElementById('book-title').value;
        const author = document.getElementById('author').value;

        if (bookTitle && author) {
            // Fetch book information including cover image
            fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(bookTitle)}+inauthor:${encodeURIComponent(author)}`)
                .then(response => response.json())
                .then(data => {
                    const book = data.items[0].volumeInfo;
                    const coverUrl = book.imageLinks.thumbnail; // Adjust for different image sizes if needed

                    const wishlistItem = document.createElement('div');
                    wishlistItem.classList.add('wishlist-item');

                    // Display cover image
                    const coverImage = document.createElement('img');
                    coverImage.src = coverUrl;
                    wishlistItem.appendChild(coverImage);

                    // Display book information
                    const bookInfo = document.createElement('p');
                    bookInfo.textContent = `${bookTitle} by ${author}`;
                    wishlistItem.appendChild(bookInfo);

                    // Add remove button
                    const removeButton = document.createElement('button');
                    removeButton.textContent = 'Remove';
                    removeButton.addEventListener('click', function() {
                        wishlistContainer.removeChild(wishlistItem);
                    });
                    wishlistItem.appendChild(removeButton);

                    wishlistContainer.appendChild(wishlistItem);

                    // Clear form fields
                    document.getElementById('book-title').value = '';
                    document.getElementById('author').value = '';
                })
                .catch(error => {
                    console.error('Error fetching book data:', error);
                    // If cover image or book data not found, add item without cover image
                    const wishlistItem = document.createElement('div');
                    wishlistItem.classList.add('wishlist-item');
                    const bookInfo = document.createElement('p');
                    bookInfo.textContent = `${bookTitle} by ${author}`;
                    wishlistItem.appendChild(bookInfo);
                    const removeButton = document.createElement('button');
                    removeButton.textContent = 'Remove';
                    removeButton.addEventListener('click', function() {
                        wishlistContainer.removeChild(wishlistItem);
                    });
                    wishlistItem.appendChild(removeButton);
                    wishlistContainer.appendChild(wishlistItem);
                    document.getElementById('book-title').value = '';
                    document.getElementById('author').value = '';
                });
        }
    });

    // Toggle sidebar
    const menuIcon = document.getElementById('menu-icon');
    const sidebar = document.getElementById('sidebar');

    menuIcon.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
});



