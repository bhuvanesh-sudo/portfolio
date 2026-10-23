---
title: Legal RAG
slug: legal-rag
order: 2
role: Solo project. Design, retrieval pipeline, API and front end.
lede: Contracts are written to be precise, not to be read. Legal RAG reads them for you, and shows its work by citing the exact clause behind every answer.
---

## The problem

Anyone who has signed a lease, an NDA or a freelance agreement knows the feeling: forty pages of dense clauses, and somewhere in there is the one line that matters. Generic chatbots will happily summarise a contract, but they paraphrase loosely and rarely say where an answer came from. For legal text, an answer you can't trace back to the source isn't much use.

## What it does

You upload a contract as a PDF and choose how you want to work with it:

- **Ask questions in plain English.** Every answer cites the clauses it is based on, so you can check it in seconds.
- **Scan for risk.** The tool checks more than ten clause types, such as indemnity, termination and liability, and tags each finding by severity.
- **Get a worry list.** A short, ranked summary of what an executive should look at first.
- **Compare two versions.** A side-by-side diff that surfaces changed obligations, not just changed words.

<figure class="placeholder" data-label="Screenshot: question answered with clause citations"></figure>

## Under the hood

The quality of a retrieval system is decided long before the language model sees anything, so most of the work went into the pipeline.

**Clause-aware chunking.** Splitting a contract every few hundred characters cuts clauses in half and mixes unrelated obligations. Instead, documents are parsed with PyMuPDF and chunked along section boundaries, so each chunk is a complete clause the model can cite.

**Two-stage retrieval.** A FAISS index finds candidate clauses quickly, then a cross-encoder reranks the top results and keeps only the ones that really answer the question. The extra step costs a little time and buys precision: the model is only handed clauses that passed a second, stricter check.

**Persistent indexes.** Indexes are saved between sessions, so reopening a contract doesn't mean re-embedding it.

**Fast generation.** The selected clauses go to Llama 3.3 70B through Groq, with a prompt that requires a citation for every claim.

<figure class="placeholder" data-label="Diagram: PDF to chunks to FAISS to reranker to LLM"></figure>

## Stack

Python, FastAPI, LangChain, FAISS, PyMuPDF, a cross-encoder reranker, Groq (Llama 3.3 70B), and React with Vite.
