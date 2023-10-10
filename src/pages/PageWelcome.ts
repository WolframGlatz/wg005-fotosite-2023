import LikeButton from "/src/components/LikeButton.ts";

let likeButtonInitialized = false;

export const PageWelcome = () => {
    if (!likeButtonInitialized) {
        LikeButton();
        likeButtonInitialized = true;
    }

    return /*html*/ `
        <div class="page pageWelcome">
            <p>Welcome to this site.</p>
            <img src="public/IMG_7001.jpg" alt="IMG_7001" class="hero-image">
            <div class="image-gallery">
                <div class="card">
                    <img src="public/IMG_6873.jpg" alt="IMG_6873">
                    <div class="overlay">
                        <span class="like-button">👍</span>
                    </div>
                </div>
              
            </div>
        </div>
    `;
}
