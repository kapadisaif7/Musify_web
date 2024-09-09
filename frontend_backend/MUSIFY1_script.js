
       // Get the audio player element
        const audioPlayer = document.getElementById('audio-player');
        const audioSource = document.getElementById('audio-source');
        const playlist = document.querySelector('.playlist');
        const playerContainer = document.querySelector('.player-container');


        // Function to play the current song
        function playSong() {
            audioPlayer.play();
        }


        // Function to pause the current song
        function pauseSong() {
            audioPlayer.pause();
        }


        // Function to change the song source, update the active button, and play the new song
        function changeSong(song, element) {
            audioSource.src = song;
            audioPlayer.load();
            audioPlayer.play();


            // Remove active class from all buttons
            document.querySelectorAll('.playlist-item').forEach(item => item.classList.remove('active'));


            // Add active class to the current item
            element.parentElement.classList.add('active');
        }


        // Function to add a new song to the playlist
        function addSong(event) {
            const file = event.target.files[0];
            if (file) {
                const currentSongs = document.querySelectorAll('.playlist-item');


                // Check if there are already 4 songs in the playlist
                if (currentSongs.length >=4) {
                    alert("You can only add 4 songs to the playlist.");
                    return;
                }


                const songUrl = URL.createObjectURL(file);
                const songName = file.name;


                // Create a new div for the playlist item
                const newItem = document.createElement('div');
                newItem.classList.add('playlist-item');


                // Create the span for the song name
                const songSpan = document.createElement('span');
                songSpan.textContent = songName;
                songSpan.onclick = function() {
                    changeSong(songUrl, songSpan);
                };


                // Create the remove button
                const removeButton = document.createElement('button');
                removeButton.textContent = '-';
                removeButton.onclick = function() {
                    removeSong(removeButton);
                };


                // Append the song span and remove button to the new item
                newItem.appendChild(songSpan);
                newItem.appendChild(removeButton);


                // Add the new item to the playlist
                playlist.appendChild(newItem);


                // Automatically play the added song
                changeSong(songUrl, songSpan);
            }
        }


        // Function to handle the background change
        function changeBackground() {
            let imageUrl = prompt("Enter the URL of the background image:");
            let confirmChange = confirm("Are you sure you want to change the background?");
            if (confirmChange) {
                playerContainer.style.backgroundImage = `url(${imageUrl})`;
            } else {
                alert("Background not changed.");
            }
        }
        function removeSong(button) {
            const playlistItems = document.querySelectorAll('.playlist-item');
            if (playlistItems.length === 1) {
                alert("Your playlist should contain at least one song.");
                return;
            }


            const itemToRemove = button.parentElement;
            if (itemToRemove.classList.contains('active')) {
                audioPlayer.pause();
                audioSource.src = '';
                audioPlayer.load();
            }
            itemToRemove.remove();
        }
