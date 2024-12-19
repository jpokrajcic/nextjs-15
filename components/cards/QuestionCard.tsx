import Link from "next/link";
import React from "react";

import ROUTES from "@/constants/routes";
import {getTimeStamp} from "@/lib/utils";
import {Question, Tag} from "@/types/types";

import TagCard from "./TagCard";
import MetricInfo from "../MetricInfo";

interface QuestionCardProps {
  question: Question;
}

const QuestionCard: React.FC<QuestionCardProps> = ({question}) => {
  const {_id, title, createdAt, tags, author, upvotes, answers, views} =
    question;

  return (
    <div className="card-wrapper rounded-lg p-9 sm:px-11">
      <div className="flex items-start justify-between gap-5 sm:flex-row">
        <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
          {getTimeStamp(createdAt)}
        </span>
        <Link href={ROUTES.QUESTION(_id)}>
          <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-2 flex-1">
            {title}
          </h3>
        </Link>
      </div>
      <div className="mt-3.5 flex w-full flex-wrap gap-2">
        {tags.map((tag: Tag) => (
          <TagCard key={tag._id} {...tag} showCount={false} />
        ))}
      </div>
      <div className="flex-between mt-6 w-full flex-wrap gap-3 ">
        <MetricInfo
          imgUrl={author.image}
          alt={author.name}
          value={author.name}
          title={`asked ${getTimeStamp(createdAt)}`}
          href={ROUTES.PROFILE(author._id)}
          textStyles="body-medium text-dark400_light700"
          isAuthor
        />
        <div className="flex items-center gap-3 max-sm:flex-wrap max-sm:justify-start">
          <MetricInfo
            imgUrl="/icons/like.svg"
            alt="Upvotes"
            value={upvotes}
            title="Votes"
            textStyles="text-dark400_light800"
          />
          <MetricInfo
            imgUrl="/icons/message.svg"
            alt="Answers"
            value={answers}
            title="Answers"
            textStyles="text-dark400_light800"
          />
          <MetricInfo
            imgUrl="/icons/eye.svg"
            alt="Views"
            value={views}
            title="Views"
            textStyles="text-dark400_light800"
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
