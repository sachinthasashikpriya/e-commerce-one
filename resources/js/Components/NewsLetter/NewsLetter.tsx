import "./NewsLetter.css";

export const NewsLetter = () => {
    return (
        <form action="/subscribers/store" method="POST">
            <input type="hidden" name="_token" value="{{ csrf_token() }}" />

            <div className="newsletter">
                <h1>Get Exclusive Offers On Your Email</h1>
                <p>Subscribe to our newsletter and stay updated</p>
                <div>
                    <input
                        type="email"
                        placeholder="Your email "
                        name="email"
                        required
                    />
                    <button type="submit">Subscribe</button>
                </div>
            </div>
        </form>
    );
};
