'use client'

import React, { useState } from "react"
import { QuestionAndAnswer } from "./QuestionAndAnswer/QuestionAndAnswer"

type Props = {}

const faqs = [
    {
        Id: 1,
        question: "What is the purpose of this project?",
        answer: "Its primary goal is to help businesses optimize their online presence and achieve higher levels of customer engagement. By providing customizable and eye-catching popups, Popupgenerator enables users to effectively grow their email lists, increase phone inquiries, and comply with cookie laws. The platform strives to simplify the process of creating popups by offering a no-code solution accessible to users of all skill levels. Popupgenerator's advanced targeting options allow businesses to deliver personalized messages to their target audience, enhancing the effectiveness of their marketing campaigns. With Popupgenerator, businesses can easily create engaging popups that drive conversions and improve customer interactions on their websites.",
    },
    {
        Id: 2,
        question: "What did you aim to achieve with this project?",
        answer: "Focusing on a project in the frontend field, encountering challenges in this area, and finding a job in this field.",
    },
    {
        Id: 3,
        question: "Where did you get all these assets?",
        answer: "I used the figma file belonging to the company named Popupsmart.",
    }
]

export const Faq = (props: Props) => {
    const [selectedFaqId, setSelectedFaqId] = useState(0)
    return (
        <div id="faq" className="border-b">
            <h2 className="font-poppins text-4xl font-bold text-center mb-12">
                Frequently Asked Questions
            </h2>
            {
                faqs.map(faq => (
                    <QuestionAndAnswer question={faq.question} answer={faq.answer} key={faq.Id} selectedFaqId={selectedFaqId} setSelectedFaqId={setSelectedFaqId} Id={faq.Id} />
                ))
            }
        </div>
    )
}
