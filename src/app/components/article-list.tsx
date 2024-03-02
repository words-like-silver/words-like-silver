import Link from "next/link";

export default function ArticleList() {
    const articles = [
        "Mountain Sounds is Coming to Shelves - Here's What You Need to Know",
        "Happy Place by Emily Henry",
        "I Spent My First-Ever Adult Vacation at This Gorgeous Hostel in Costa Rica",
        "These $50 Parachute Pants Are My Latest Obsession",
        "10 Spring Break-Ish Books Coming Out in March",
    ];
    return (
        <ul>
            {articles.map((article, index) => (
                <li
                    className="px-4 my-4 text-center border-b pb-4 text-3xl border-black"
                    key={index}
                >
                    <Link href="/" className="w-full h-full block">
                        {article}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
