Joe’s Diner

Joe’s Diner è una web app interattiva per ordinare cibo, sviluppata con HTML, CSS e JavaScript.

Il progetto simula un flusso completo di ordinazione: l’utente può scegliere i piatti dal menu, aggiungere più prodotti al carrello, controllare il proprio ordine, rimuovere elementi, visualizzare il totale calcolato dinamicamente e completare l’ordine attraverso un form di checkout.

Panoramica del progetto

L’obiettivo del progetto è stato creare un’applicazione in cui l’interfaccia reagisce dinamicamente alle azioni dell’utente, andando oltre una semplice pagina HTML statica.

I dati del menu sono gestiti separatamente attraverso JavaScript e vengono utilizzati per generare dinamicamente l’interfaccia, gestire le quantità dei prodotti e calcolare il prezzo finale.

L’applicazione accompagna l’utente attraverso l’intero processo di ordinazione:

Selezione dei piatti → Aggiunta al carrello → Riepilogo dell’ordine → Checkout → Conferma

Funzionalità

* Selezione multipla dei prodotti tramite checkbox
* Menu dropdown personalizzato
* Rendering dinamico dei prodotti selezionati
* Aggiunta dei prodotti al carrello
* Gestione di più quantità dello stesso prodotto
* Rimozione dei singoli prodotti dall’ordine
* Calcolo automatico del prezzo totale
* Aggiornamento dinamico del riepilogo dell’ordine
* Modal per completare il checkout
* Validazione del form tramite HTML
* Messaggio di conferma personalizzato con i dati dell’utente
* Possibilità di iniziare un nuovo ordine
* Transizioni tra le diverse fasi dell’ordinazione
* Integrazione di Font Awesome per le icone dei prodotti

Tecnologie utilizzate

HTML5

Utilizzato per creare la struttura dell’applicazione, il sistema di selezione dei prodotti e il form per completare l’ordine.

CSS3

Utilizzato per realizzare l’interfaccia e gestire:

* layout con Flexbox
* posizionamento del dropdown
* stati hover e focus
* transizioni
* modal di checkout
* styling dei form
* visualizzazione dinamica delle diverse sezioni

JavaScript

JavaScript gestisce la logica principale dell’applicazione, tra cui:

* manipolazione del DOM
* gestione degli eventi
* Event Delegation
* metodi degli array
* rendering dinamico dell’HTML
* gestione del carrello
* gestione delle quantità
* calcolo del prezzo totale
* gestione del form
* utilizzo dei data-* attributes
* modifica dinamica delle classi CSS

Concetti JavaScript utilizzati

Questo progetto mi ha permesso di applicare diversi concetti JavaScript all’interno di un’applicazione completa.

ES Modules

I dati del menu sono separati dalla logica principale dell’applicazione e salvati all’interno del file data.js.

Il menu viene esportato:

export const menuArray = [...] e successivamente importato all’interno di index.js.

Questo permette di mantenere separati i dati dalla logica dell’applicazione e di organizzare meglio il codice.

Rendering dinamico

I prodotti selezionati dall’utente non sono scritti direttamente nell’HTML.

JavaScript utilizza i dati contenuti in menuArray per generare dinamicamente gli elementi da mostrare nell’interfaccia.

Metodi come .map() e .join() permettono di trasformare i dati del menu in elementi HTML in base alle scelte dell’utente.

Gestione del carrello

Ogni prodotto contiene una proprietà count che rappresenta la quantità attualmente presente nell’ordine.

Quando l’utente aggiunge o rimuove un prodotto, JavaScript modifica questa proprietà e aggiorna nuovamente il riepilogo.

In questo modo l’interfaccia mostra sempre lo stato corrente del carrello.

Calcolo dinamico del totale

Il prezzo totale dell’ordine viene calcolato utilizzando .reduce().

Per ogni prodotto viene calcolato:

prezzo × quantità

I risultati vengono poi sommati per ottenere il totale complessivo.

Il prezzo viene quindi aggiornato automaticamente ogni volta che cambia il contenuto del carrello.

Event Delegation

Alcuni pulsanti dell’applicazione vengono generati dinamicamente e quindi non esistono al caricamento iniziale della pagina.

Per gestirli viene utilizzato un event listener sul document.

Attraverso e.target, classList e dataset, JavaScript identifica quale pulsante è stato premuto e quale prodotto deve essere modificato.

Gestione del checkout

Dopo aver controllato il proprio ordine, l’utente può aprire una modal e inserire nome e indirizzo di consegna.

FormData viene utilizzato per recuperare i dati inseriti nel form.

Dopo l’invio viene generato dinamicamente un messaggio di conferma personalizzato senza ricaricare la pagina.

Struttura del progetto

index.html — struttura dell’applicazione e form di checkout

index.css — layout, styling, transizioni e modal

index.js — logica dell’applicazione, rendering, gestione del carrello ed eventi

data.js — dati del menu e stato iniziale dei prodotti

images/ — risorse grafiche utilizzate nell’interfaccia

Competenze messe in pratica

La realizzazione di Joe’s Diner mi ha permesso di consolidare diversi concetti di sviluppo Frontend:

* JavaScript Modules con import ed export
* .map()
* .find()
* .reduce()
* .join()
* manipolazione del DOM
* Event Delegation
* data-* attributes e dataset
* classList
* gestione dei form
* FormData
* template literals
* rendering dinamico
* gestione dello stato del carrello
* separazione tra dati e logica dell’applicazione

Cosa ho imparato

Uno degli aspetti più importanti di questo progetto è stato passare da semplici interazioni JavaScript isolate alla gestione di diverse parti dell’applicazione che dipendono dagli stessi dati.

Aggiungere o rimuovere un prodotto non significa solamente modificare un numero: cambia lo stato del carrello, la quantità dei prodotti, il riepilogo dell’ordine e il prezzo totale mostrato all’utente.

Questo progetto mi ha aiutato a comprendere meglio come utilizzare JavaScript per mantenere sincronizzati i dati dell’applicazione e l’interfaccia utente.

Il progetto

Joe’s Diner fa parte del mio percorso di crescita nello sviluppo Frontend.

Con questo progetto ho lavorato su un flusso utente completo, applicando JavaScript alla gestione di dati dinamici, interazioni, rendering dell’interfaccia e organizzazione della logica su più file.

L’obiettivo non è stato solamente realizzare l’interfaccia di un’app di ordinazione, ma comprendere come le diverse parti di una web application possano comunicare tra loro e reagire alle azioni dell’utente.