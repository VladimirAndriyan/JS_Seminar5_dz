//  7 Создайте объект riddles 
//  Добавьте свойства question, answer
//  создайте метод askQuestion который спрашивает у пользователя вопрос question и сравнивает ответ с answer
//  Если ответил неверно, то в консоль выводится текст: “вы проиграли”

const riddles = {
    question: 'Зимой и летом одним цветом',
    answer: 'елка',
    hints:[
        'Зеленая',
        'С иголками'
    ],    
    askQuestion() {         
        if (prompt(this.question).toLowerCase()!== riddles.answer) {
            alert(this.hints[0]);            
        } else {
            return alert('Молодец');                        
        }      
        if (prompt(this.question).toLowerCase()!== riddles.answer) {
            alert(this.hints[1]);     
        } else {
            return alert('Молодец');                        
        }      
        if (prompt(this.question).toLowerCase()!== riddles.answer) {
            alert('Вы проиграли');     
        } else {
            return alert('Молодец');                        
        }      
    }
}
riddles.askQuestion();