DOCUMENTATIE PROIECT CC PETRE MIHAIL RADU, SIMPRE, GRUPA 1133


PROIECT CLOUD COMPUTING
~YOUR TO DO LIST~
NUME: Petre Mihail Radu
GRUPA: 1133

Link video pentru prezentarea proiectului:
Proiect CC Petre Mihail Radu, SIMPRE, grupa 1133 (youtube.com)
Link publicare proiect:
proiect-cc-petre-mihail-radu-simpre-grupa-1133.vercel.app
Link GitHub:
PetreCMihailRadu/Proiect-CC-Petre-Mihail-Radu-SIMPRE-grupa-1133 (github.com)

INTRODUCERE:
	Aplicatia “YOUR TO DO LIST” este un instrument simplu și eficient pentru gestionarea sarcinilor zilnice. Cu ajutorul acestei aplicații, puteți să vă organizați mai bine sarcinile, să urmăriți progresul și să vă mențineți productivitatea pe parcursul zilei.
Prin intermediul metodelor CRUD (Create, Read, Update, Delete), puteți adăuga, vizualiza, actualiza și șterge sarcini în mod facil și rapid. Fie că este vorba despre sarcini personale sau profesionale, aplicația noastră vă oferă o modalitate simplă de a vă gestiona lista de lucruri de făcut.
  Un aspect distinctiv al aplicației noastre este funcționalitatea de a atribui un status fiecărei sarcini, astfel încât să puteți urmări cu ușurință stadiul de realizare al fiecăreia. Indiferent dacă o sarcină este realizată sau încă în lucru, puteți monitoriza și actualiza statusul său cu un singur clic.
  Baza noastră de date solidă, bazată pe MongoDB, vă asigură că datele dumneavoastra sunt stocate în siguranță și accesibile în orice moment. De asemenea, cu ajutorul platformei de hosting Vercel, aplicația noastră web este rapidă, fiabilă și ușor de accesat de oriunde și oricând.
  Începeți să vă organizați mai bine viața de zi cu zi astăzi cu un astfel de “TO DO LIST”. Gestionați-vă sarcinile cu ușurință, urmăriți progresul și atingeți-vă obiectivele cu mai multă eficiență ca niciodată înainte.

DESCRIERE PROBLEMA:
	Într-o lume agitată și plină de sarcini, este adesea dificil să ne păstrăm organizarea și să fim eficienți în gestionarea timpului nostru. Fie că suntem implicați în proiecte personale sau profesionale, sarcinile se adună rapid și devine dificil să ținem pasul cu ele.
Aplicația noastră vine în întâmpinarea acestei probleme, oferind o soluție simplă și eficientă pentru gestionarea listelor de sarcini. Indiferent dacă este vorba despre sarcini zilnice, proiecte mari sau obiective pe termen lung, aplicația noastră vă ajută să vă organizați și să vă prioritizați sarcinile într-un mod eficient și intuitiv.
Problema pe care o rezolvă aplicația noastră este aceea de a simplifica procesul de gestionare a sarcinilor, oferind o modalitate convenabilă de a organiza și urmări lucrurile de făcut. Indiferent de natura sau complexitatea sarcinilor, aplicația noastră vă ajută să vă mențineți concentrarea și să vă atingeți obiectivele cu mai multă ușurință și eficiență.

DESCRIERE TEHNOLOGII CLOUD FOLOSITE:
Pentru gestionarea bazei de date, am ales MongoDB, o soluție de tip NoSQL care oferă flexibilitate și scalabilitate. MongoDB este ideală pentru aplicații web datorită capacității sale de a manipula date structurate și neestructurate într-un mod eficient. Cu funcții avansate de interogare și indexare, MongoDB ne permite să gestionăm cu ușurință datele din aplicația noastră de TO DO LIST, oferind în același timp performanțe ridicate și fiabilitate.
În ceea ce privește hosting-ul aplicației, am ales Vercel, o platformă cloud care facilitează implementarea rapidă și scalabilă a aplicațiilor web. Vercel oferă un mediu de dezvoltare și hosting optimizat pentru proiecte construite cu framework-uri moderne precum Next.js și React. Cu Vercel, putem să ne concentrăm pe dezvoltarea aplicației fără să ne facem griji cu privire la gestionarea infrastructurii sau a scalabilității, deoarece platforma se ocupă de gestionarea automată a serverelor și a resurselor necesare pentru a menține aplicația noastră online și performantă.
Prin utilizarea acestor două tehnologii cloud - MongoDB pentru baza de date și Vercel pentru hosting - ne asigurăm că aplicația noastră de TO DO LIST este scalabilă, performantă și ușor de gestionat, permițându-ne să ne concentrăm pe dezvoltarea funcționalităților și îmbunătățirea experienței utilizatorilor.

DESCRIERE API:
	In codul sursa se observa existenta unui API care gestioneaza operatiile CRUD pentru obiectele “records” folosind metodele HTTP GET, POST, PUT, DELETE.
API-ul pentru înregistrări (records):
•	GET /api/records: Returnează toate înregistrările din baza de date. Dacă există înregistrări, răspunsul va fi un array cu înregistrările; altfel, va fi un array gol.
•	GET /api/records?id=:id: Returnează o înregistrare specifică identificată prin ID-ul furnizat în query parametrul "id". Dacă înregistrarea există, va fi returnată; altfel, va fi returnat un răspuns gol.
•	POST /api/records: Creează o nouă înregistrare folosind datele primite în corpul cererii. Datele trebuie să fie trimise în format JSON. Returnează înregistrarea creată.
•	PUT /api/records: Actualizează o înregistrare existentă folosind datele primite în corpul cererii. Datele trebuie să conțină ID-ul înregistrării care trebuie actualizată. Returnează înregistrarea actualizată.
•	DELETE /api/records?id=:id: Șterge o înregistrare specifică identificată prin ID-ul furnizat în query parametrul "id". Returnează un răspuns de confirmare a ștergerii.
     Structura datelor pentru înregistrările (records):
•	title: Titlul înregistrării.
•	content: Conținutul înregistrării.
•	completed: Statusul înregistrării, indicând dacă este completată sau nu.

FLUX DE DATE:
Exemple de request-uri și response-uri:
1.	GET /api/records
•	Request: GET /api/records
•	Response:
[
    {
        "_id": "610f4a9a3bb0ce0008c44e7b",
        "title": "Achiziționare produse",
        "content": "Cumpără alimente și produse de uz casnic.",
        "completed": false
    },
    {
        "_id": "610f4aad3bb0ce0008c44e7d",
        "title": "Scrie raport",
        "content": "Completează raportul lunar pentru departamentul financiar.",
        "completed": true
    }
]

2.	POST /api/records
•	Request:
POST /api/records
{
    "title": "Rezervare bilet avion",
    "content": "Rezervă bilet de avion pentru vacanța din luna următoare.",
    "completed": false
}
•	Response:
{
    "_id": "6113f4a9a1b6de0008d27ea4",
    "title": "Rezervare bilet avion",
    "content": "Rezervă bilet de avion pentru vacanța din luna următoare.",
    "completed": false
}

3.	PUT /api/records
•	Request: 
PUT /api/records
{
    "_id": "6113f4a9a1b6de0008d27ea4",
    "title": "Rezervare bilet avion",
    "content": "Rezervă bilet de avion pentru vacanța din luna următoare.",
    "completed": true
}
•	Response:
{
    "_id": "6113f4a9a1b6de0008d27ea4",
    "title": "Rezervare bilet avion",
    "content": "Rezervă bilet de avion pentru vacanța din luna următoare.",
    "completed": true
}

4.	DELETE /api/records
•	Request: DELETE /api/records?id=6113f4a9a1b6de0008d27ea4
•	Response:
{
    "acknowledged": true,
    "deletedCount": 1
}

METODE HTTP UTILIZATE:
•	GET: Pentru a obține înregistrări existente.
•	POST: Pentru a crea o nouă înregistrare.
•	PUT: Pentru a actualiza o înregistrare existentă.
•	DELETE: Pentru a șterge o înregistrare existentă.

CAPTURI DE ECRAN APLICATIE
![image](https://github.com/PetreCMihailRadu/Proiect-CC-Petre-Mihail-Radu-SIMPRE-grupa-1133/assets/168712584/ef8a6d19-167a-4196-bfe8-83861cf2db6c)
![image](https://github.com/PetreCMihailRadu/Proiect-CC-Petre-Mihail-Radu-SIMPRE-grupa-1133/assets/168712584/bcd709a0-3118-4572-b5d6-f90c0592fd5f)
![image](https://github.com/PetreCMihailRadu/Proiect-CC-Petre-Mihail-Radu-SIMPRE-grupa-1133/assets/168712584/3c3c151a-7487-41e5-b6be-d5fb4b4c841c)
![image](https://github.com/PetreCMihailRadu/Proiect-CC-Petre-Mihail-Radu-SIMPRE-grupa-1133/assets/168712584/dbd2226f-b879-41b2-972a-92f750bbaa80)
![image](https://github.com/PetreCMihailRadu/Proiect-CC-Petre-Mihail-Radu-SIMPRE-grupa-1133/assets/168712584/0fa79c5e-9917-4c53-a79f-be186bb0738f)




This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
