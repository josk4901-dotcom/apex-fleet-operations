import { getPosts } from "../api";
import { useEffect, useState } from "react";

export default function Products() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const data = await getPosts();
            setPosts(data);
            setLoading(false);
        };
        fetchPosts();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="products-container">
            {posts.map((post) => (
                <div key={post.id} className="product-card">
                    <h3>{post.title}</h3>
                    <p>{post.author}</p>
                </div>
            ))}
        </div>
    );
}