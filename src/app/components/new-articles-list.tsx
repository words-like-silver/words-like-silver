import ArticleList from "./article-list";

export default function NewArticleList() {
    return (
        <div>
            <h2 className="font-sailing-club text-center text-3xl italic">
                new
            </h2>
            <ArticleList />
            <div className="font-sailing-club text-center text-3xl italic">
                all posts
            </div>
        </div>
    );
}
