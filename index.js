const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 1337;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (request, response) => {
    response.send('Funcionando!');
});

app.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
});

app.get('/phrases', (request, response) => {
    response.json([{
        id: 1, phrase: 'Se tu olhares, durante muito tempo, para um abismo, o abismo também olhará para dentro de ti',
        author: 'Friedrich Nietzsche'
    },
    {
        id: 2, phrase: 'Por vezes as pessoas não querem ouvir a verdade porque não desejam que suas ilusões sejam destruidas',
        author: 'Friedrich Nietzsche'
    },
    {
        id: 3,
        phrase: "Penso, logo existo",
        author: "René Descartes"
    },
    {
        id: 4,
        phrase: "A felicidade não é algo pronto, ela vem com as suas próprias ações",
        author: "Dalai Lama"
    },
    {
        id: 5,
        phrase: "A vida é aquilo que acontece enquanto estamos ocupados fazendo outros planos",
        author: "John Lennon"
    },
    {
        id: 6,
        phrase: "A vida sem reflexão não vale a pena ser vivida.",
        author: "Sócrates"
    },
    {
        id: 7,
        phrase: "A unica coisa que sei é que nada sei.",
        author: "Sócrates"
    },
    {
        id: 8,
        phrase: "A liberdade é a possibilidade do isolamento. Se te é impossível viver só, nasceste escravo.",
        author: "Fernando Pessoa"
    },
    {
        id: 9,
        phrase: "A vida é muito simples, mas insistimos em torná-la complicada",
        author: "Confúcio"
    },
    {
        id: 10,
        phrase: "O que não nos mata nos torna mais fortes",
        author: "Friedrich Nietzsche"
    },
    {
        id: 11,
        phrase: "A mente que se abre a uma nova ideia jamais voltará ao seu tamanho original",
        author: "Albert Einstein"
    },
    {
        id: 12,
        phrase: "A vida é uma tragédia quando vista de perto, mas uma comédia quando vista de longe",
        author: "Charlie Chaplin"
    },
    {
        id: 13,
        phrase: "A vida é como andar de bicicleta. Para manter o equilíbrio, você deve continuar se movendo.",
        author: "Albert Einstein"
    },
    {
        id: 14,
        phrase: "A maior riqueza é viver contente com pouco.",
        author: "Platão"
    },
    {
        id: 15,
        phrase: "A vida é um eco. Se você não gosta do doque está recebendo, observe o que está emitindo.",
        author: "Lao Tsé"
    },
    {
        id: 16,
        phrase: "A vida é uma peça de teatro que não permite ensaios",
        author: "Friedrich Nietzsche"
    },
    {
        id: 17,
        phrase: "A esperança é o sonho do homem acordado.",
        author: "Aristóteles"
    },
    {
        id: 18,
        phrase: "Eu não sei o que quero ser, mas sei muito bem o que não quero me tornar.",
        author: "Friedrich Nietzsche"
    },
    {
        id: 19,
        phrase: "Não fales bem de ti aos outros, não os convencerás. Não fales mal, pois te julgarão muito pior do que és.",
        author: "Confúcio"
    },
    {
        id: 20,
        phrase: "Para conhecermos os amigos é necessário passar pelo sucesso e pela desgraça. No sucesso, verificamos a quantidade e, na desgraça, a qualidade.",
        author: "Confúcio"
    },
    {
        id: 21,
        phrase: "Não espere por uma crise para descobrir o que é importante em sua vida.",
        author: "Platão"
    },
    {
        id: 22,
        phrase: "Fiquei magoado, não por me teres mentido, mas por não poder voltar a acreditar-te.",
        author: "Friedrich Nietzsche"
    },
    {
        id: 23,
        phrase: "Exige muito de ti e espera pouco dos outros. Assim, evitarás muitos aborrecimentos.",
        author: "Confúcio"
    },
    {
        id: 24,
        phrase: "Sábio é aquele que conhece os limites da própria ignorância.",
        author: "Sócrates"
    },
    {
        id: 25,
        phrase: "O amigo deve ser como o dinheiro, cujo valor já conhecemos antes de termos necessidade dele.",
        author: "Sócrates"
    },
    {
        id: 26,
        phrase: "Podemos julgar o coração de um homem pela forma como ele trata os animais.",
        author: "Immanuel Kant"
    },
    {
        id: 27,
        phrase: "Que vantagem têm os mentirosos? A de não serem acreditados quando dizem a verdade.",
        author: "Aristóteles"
    },
    {
        id: 28,
        phrase: "Só sei que nada sei, e o fato de saber isso, me coloca em vantagem sobre aqueles que achamq ue sabel alguma coisa.",
        author: "Sócrates"
    },
    {
        id: 29,
        phrase: "A coisa mais indispensável a um homem é reconhecer o uso que deve fazer do seu próprio conhecimento.",
        author: "Platão"
    },
    {
        id: 30,
        phrase: "Querem que vos ensine o modo de chegar à ciência verdadeira? Aquilo que se sabe, saber que se sabe; aquilo que não se sabe, saber que não se sabe; na verdade é esse o saber.",
        author: "Confúcio."
    },
    {
        id: 31,
        phrase: "A essência do conhecimento consiste em aplicá-lo, uma vez possuído.",
        author: "Confúcio"
    },
    {
        id: 32,
        phrase: "Ao examinarmos os erros de um homem, conhecemos o seu caráter.",
        author: "Confúcio"
    },
    {
        id: 33,
        phrase: "Pode conhecer o espírito de qualquer pessoa, se observares como ela se comporta ao elogiar e receber elogios.",
        author: "Sêneca"
    },
    {
        id: 34,
        phrase: "Não te preocupes com os que não te conhecem, mas esforça-te por seres digno de ser conhecido.",
        author: "Confúcio"
    },
    {
        id: 35,
        phrase: "Nenhum vencedor acredita no acaso.",
        author: "Friedrich Nietzsche"
    },
    {
        id: 36,
        phrase: "Julgareis em vão dar grandeza á vossa alma se não fazeis crescer em virtude.",
        author: "Platão"
    },
    {
        id: 37,
        phrase: "Nós, homens do conhecimento, não nos conhecemos; de nós mesmos somos desconhecidos.",
        author: "Friedrich Nietzsche"
    },
    {
        id: 38,
        phrase: "Por vezes as pessoas não querem ouvir a verdade porque não desejam que suas ilusões sejam destruídas",
        author: "Friedrich Nietzsche"
    },
    {
        id: 39,
        phrase: "'É preciso que não nos deixemos enganar: 'não julguem' dizem, mas eles mandam tudo que atravesse seus caminho para o inferno. ",
        author: "Friedrich Nietzsche"
    },
    {
        id: 40,
        phrase: "O cansaço físico, mesmo que suportado forçosamente, não prejudica o corpo, enquanto o conhecimento imposto à for",
        author: "Platão"
    },
    {
        id: 41,
        phrase: "O homem de bem exige tudo de si próprio; o homem medíocre espera tudo dos outros.",
        author: "Confúcio"
    },
    {
        id: 42,
        phrase: "O mundo é um lugar perigoso de se viver, não por causa daqueles que fazem o mal, mas sim por causa daqueles que observam e deixam o mal acontecer.",
        author: "Albert Einstein"
    },
    {
        id: 43,
        phrase: "Duas coisas são infinitas: o universo e a estupidez humana. Mas, em relação ao universo, ainda não tenho certeza absoluta.",
        author: "Albert Einstein"
    },
    {
        id: 44,
        phrase: "Grandes almas sempre encontraram forte oposição de mentes medíocres.",
        author: "Albert Einstein"
    },
    {
        id: 45,
        phrase: "Eu tentei 99 vezes e falhei, mas na centésima tentativa eu consegui, nunca desista de seus objetivos mesmo que esses pareçam impossíveis, a próxima tentativa pode ser a vitoriosa.",
        author: "Albert Einstein"
    },
    {
        id: 46,
        phrase: "Uma vida sem desafios não vale a pena ser vivida.",
        author: "Sócrates"
    },
    {
        id: 47,
        phrase: "O ignorante afirma, o sábio duvida, o sentato reflete.",
        author: "Aristóteles"
    }
    ]
    );
});
