"use client";

import { useState, type Dispatch, type SetStateAction } from "react";

interface CommentRetun {
	setCustomReting: Dispatch<SetStateAction<number>>;
	setCommentText: Dispatch<SetStateAction<string>>;
	customReting: number;
	commentText: string;
}

export default function useComment(): CommentRetun {
    const [customReting, setCustomReting] = useState<number>(0);
    const [commentText, setCommentText] = useState<string>('');

    
    return {
			customReting,
			setCustomReting,
			commentText,
			setCommentText,
		};
}
