import {useState} from 'react';
import {quiz} from './soalan.js'
import './App.css';

const  Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('  ')
  const [showResults, setShowResults] = useState(false)
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
  const [result, setResult] = useState( {
    score : 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  })

  const { questions } = quiz
  const {question , choices , correctAnswer } = questions[activeQuestion]

  const onClickNext = () => {
    setSelectedAnswerIndex(null)
    setResult( (prev) => 
    selectedAnswer
    ? {
      ...prev,
      score: prev.score + 5,
      correctAnswers: prev.correctAnswers + 1,
    }
    : { ...prev, wrongAnswers:prev.wrongAnswers-1}
    )
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1)
    } else {
      setActiveQuestion(0)
      setShowResults(true)
    }
  }

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index)
    if (answer === correctAnswer) {
      setSelectedAnswer(true)
    } else {
      setSelectedAnswer(false)
    }
  }


  return (<>
    <div className="quiz-container">
      {!showResults ? (
        <div>
          <div>
            <h1>Anniversary Quiz</h1>
          </div>
          <h2>{question}</h2>
          <ul>
            {choices.map((answer, index) => (
              <li
                onClick={() => onAnswerSelected(answer, index)}
                key={answer}
                className={selectedAnswerIndex === index ? 'selected-answer' : null}>
                {answer}
              </li>
            ))}
          </ul>
          <div className="flex-right">
            <button onClick={onClickNext} disabled={selectedAnswerIndex === null}>
              {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      ) : (
        <div className="result">
           <p>
            Correct Answers:<span> {result.correctAnswers}</span>
          </p>
          
          <h3>Letter of Love</h3>

          <p>
            There is no result but I believe you know me well hehe, and here is a letter for a year together
          </p>
          <p>
            Dear Khatijah,
          </p>
          <p>
            I can't believe we actually made it together for one year now ! (actually more).
            I honestly rasa happy, exciting selama kita bersama. We made alot of memories from 
            travelling the world together and doing things we never did. There's this time kita 
            pergi trafalgar square actually our first date we  jalan jalan and I thought at that moment
            yang catik nya u ni. Hahaha and I felt butterflies receiving your texts. And terasa happy 
            whenever I am with you. 
          </p>
          <p>
            Tapi, I have to be honest with you. After the first few months I actually tak tahu kenapa 
            kita bersama I feel like we werent meant to be together. Idk I felt like there was no love pun
            and I diam je cause I believe it wasactually just my past. yang buat i macam ni. So after that I kept on 
            believing. And yea I did feel the love again. It slowly grew again. I was afraid of losing you. Afraid of you 
            going to someone else. Maybe it was from the trauma it made me feel like this. Honestly I pun tak tahu.
          </p>
          <p>
            Tapi I am glad to be with you, and hope maybe Allah guide us respectfully. You are loyal to me 
            and i am forever grateful for that. You are also attractive sometimes makes me calm, learns from our mistakes, 
            knows how to cook, not really gedik like other girls, very independent and always thinks of herself. I do not know 
            if I am good enough for you.
          </p>
          <p>
            Anyways, Happy 1 year anniversary sayang I wish we all be well enough to seek for a good and better future together.
          </p>
          <p>
            Love, 
            <br>
            </br>
            Adam
          </p>
          <a href="https://www.canva.com/design/DAF8uPdpCNo/oQlyPCEGSVqbf4javjVkmQ/view">Please press this link</a>
        </div>
      )}
    </div>
    </>
  )
}

export default Quiz