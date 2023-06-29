'use client'

import React, { useState } from "react"
import { QuestionAndAnswer } from "./QuestionAndAnswer/QuestionAndAnswer"

type Props = {}

const faqs = [
    {
        Id: 1,
        question: "How do I pay for the essentials or premium plan?",
        answer: "Test answer. We appreciate your inquiries! Please note that this is a test environment, and we cannot process real payments here. To make a real payment, you would normally use a service provider's website or application. Before making a payment, we recommend following secure payment processes and using online payment methods. Remember, the information provided here is for testing purposes only and cannot facilitate real payment transactions.",
    },
    {
        Id: 2,
        question: "Can I cancel my essentials or premium plan subscription at my time?",
        answer: "Test answer. You can pay with a credit card or via net banking (if you’re in United States). We willrenew your subscription automatically at the end of every billing cycle. You can paywith a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.",
    },
    {
        Id: 3,
        question: "We need to add new users to our team, how will that be billed?",
        answer: "Test answer. We're excited to have new users join our team! Regarding billing for new users, please note that our pricing is typically based on a per-user basis. When you add new users to our team, they will be included in the billing calculation according to the selected plan. The billing cycle may depend on the terms and conditions of your subscription. We recommend reviewing our pricing details or contacting our support team for specific information on how new user additions will be billed. Our goal is to ensure a transparent and seamless billing process for our valued customers",
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
