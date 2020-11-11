import {React, } from 'react'

export const ListQuizzes = () => {
    let quizzes = [
        {
            question : "What is the difference between UX (User Experience) and UI (User Interface)?",
            answers : [
                "There is no difference. UX and UI express the same thing in different ways",
                "UX Design cares about the user and UI, no",
                "UX Design is about graphics and visual aspects, with a focus on the presentation of interfaces, while UI Design is mainly concerned with optimizing the user experience",
                "UX is focused on optimizing a product for effective and enjoyable use. UI Design is concerned with the appearance and visual aspect, the presentation and interactivity of a product",
            ],
            answer : 3,
        },
        {
            question : "What is the year of Nasdaq foundation?",
            answers : [
                "2000",
                "1997",
                "1800",
                "1986",
            ],
            answer : 1,
        },
    ]
    return quizzes
}
export default ListQuizzes