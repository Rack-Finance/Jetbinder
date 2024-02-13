import React, { useState } from "react";
import faqQuestionMark from "../../assets/faqQuestionMark.svg";
import { FaPlus } from "react-icons/fa6";

const faqs = [
  {
    id: 1,
    question: "What is Jetbinder?",
    answer:
      "Jetbinder is an innovative platform designed to ease business productivity. Created to facilitate and optimize deliveries, jetbinder is ideal for you to cut costs and delight your customers with fast, reliable, practical, transparent and efficient delivery services provided by Jetbinder.",
  },
  {
    id: 2,

    question: "How are fares calculated?",
    answer:
      "Jetbinder is an innovative platform designed to ease business productivity. Created to facilitate and optimize deliveries, jetbinder is ideal for you to cut costs and delight your customers with fast, reliable, practical, transparent and efficient delivery services provided by Jetbinder.",
  },
  {
    id: 3,

    question: "What are the payment options?",
    answer:
      "Jetbinder is an innovative platform designed to ease business productivity. Created to facilitate and optimize deliveries, jetbinder is ideal for you to cut costs and delight your customers with fast, reliable, practical, transparent and efficient delivery services provided by Jetbinder.",
  },
  {
    id: 4,

    question: "Can i cancel my order?",
    answer:
      "Jetbinder is an innovative platform designed to ease business productivity. Created to facilitate and optimize deliveries, jetbinder is ideal for you to cut costs and delight your customers with fast, reliable, practical, transparent and efficient delivery services provided by Jetbinder.",
  },
  {
    id: 5,

    question: "Are i charged for cancelling?",
    answer:
      "Jetbinder is an innovative platform designed to ease business productivity. Created to facilitate and optimize deliveries, jetbinder is ideal for you to cut costs and delight your customers with fast, reliable, practical, transparent and efficient delivery services provided by Jetbinder.",
  },
];

export const Faq = () => {
  const [expandedItems, setExpandedItems] = useState(() => {
    const items = Array(faqs.length).fill(false);
    items[0] = true; // Set the first item to true
    return items;
  });

  return (
    <div className="py-20 lg:px-28 md:px-16 sm:px-8  px-4 bg-[#F1F6FF]">
      <div className="flex flex-col items-center justify-center mb-10">
        <img src={faqQuestionMark} alt="" />
        <h1 className="text-[#2E526B] font-bold text-[22px] mt-4">
          Frequently Asked Questions{" "}
        </h1>
        <div className="bg-[#7B32B5] w-12 h-[2px] mt-2"></div>
      </div>

      <div className="bg-white  lg:px-20 md:px-10 sm:px-8  px-4 py-10 rounded-lg flex flex-col ">
        {faqs.map(({ question, answer }, index) => {
          return (
            <div
              key={index}
              className={`border-b-[0.5px] border-[#2E526B] py-5 flex  gap-2`}
            >
              <p className="text-[#F48C06] font-[600] text-[14px] mt-2">
                <FaPlus
                  onClick={() => {
                    const newExpandedItems = [...expandedItems];
                    newExpandedItems[index] = !newExpandedItems[index];
                    setExpandedItems(newExpandedItems);
                  }}
                />
              </p>

              <div>
                <p className="text-[#2E526B] text-[16px] font-[600]">
                  {question}
                </p>

                {expandedItems[index] ? (
                  <p className="text-[#2E526B] text-[13px]">{answer}</p>
                ) : (
                  <p className="text-[#2E526B] text-[13px]"></p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
