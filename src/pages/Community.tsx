
import React from "react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MessageSquare, Heart, Share2 } from "lucide-react";

interface Post {
  id: number;
  author: string;
  avatar: string;
  date: string;
  content: string;
  likes: number;
  comments: number;
  tags: string[];
}

const posts: Post[] = [
  {
    id: 1,
    author: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=250&h=250&q=80",
    date: "2h ago",
    content: "Just completed my first week as a Senior Data Scientist at Google! The team has been incredibly welcoming, and I'm excited about the projects ahead. #DataScience #NewJob #TechCommunity",
    likes: 245,
    comments: 28,
    tags: ["DataScience", "CareerGrowth", "Tech"]
  },
  {
    id: 2,
    author: "Mike Chen",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=250&h=250&q=80",
    date: "5h ago",
    content: "Looking for tips from experienced Software Engineers: What are your go-to resources for staying updated with the latest web development trends? #WebDev #CodingLife",
    likes: 182,
    comments: 56,
    tags: ["Programming", "WebDevelopment", "Career"]
  },
  {
    id: 3,
    author: "Emily Rodriguez",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=250&h=250&q=80",
    date: "1d ago",
    content: "Just shared my journey from junior to senior developer on my blog. Check it out if you're looking to level up your career! Link in comments 👇 #CareerAdvice #Programming",
    likes: 391,
    comments: 45,
    tags: ["CareerAdvice", "Programming", "PersonalGrowth"]
  }
];

const Community = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto pt-8 px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Community</h1>
          <Button className="bg-black hover:bg-gray-800">Create Post</Button>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-start space-x-4">
                <Avatar className="w-12 h-12">
                  <img src={post.avatar} alt={post.author} className="object-cover" />
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{post.author}</h3>
                    <span className="text-gray-500 text-sm">{post.date}</span>
                  </div>
                  <p className="mt-2 text-gray-700">{post.content}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-sm text-blue-600">#{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-6 mt-4 text-gray-500">
                    <button className="flex items-center space-x-2 hover:text-gray-700">
                      <Heart className="w-5 h-5" />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 hover:text-gray-700">
                      <MessageSquare className="w-5 h-5" />
                      <span>{post.comments}</span>
                    </button>
                    <button className="flex items-center space-x-2 hover:text-gray-700">
                      <Share2 className="w-5 h-5" />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
