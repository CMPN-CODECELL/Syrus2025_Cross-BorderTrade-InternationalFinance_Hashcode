# README: Geopolitical Events Impact Analysis using RAG

## Overview
This agent aims to fetch real-time geopolitical events through an API and use Retrieval-Augmented Generation (RAG) to assess their potential impact on **IndiBazaar**, an India-based e-commerce business. The system evaluates risks and opportunities based on external geopolitical developments and generates insights to aid business decision-making.

## Components
1. **News API**
   - Retrieves live geopolitical events such as trade policies, conflicts, economic sanctions, and currency fluctuations.
   - Events are processed and categorized based on their relevance to the user's business.

2. **Business Knowledge Documents**
   - Contains all details about IndiBazaar, including business model, logistics, supply chain, exports, and geopolitical risk factors.
   - Used as a knowledge base in the RAG pipeline for contextual understanding.

3. **RAG Pipeline**
   - Uses an LLM to analyze geopolitical events and compare them against the user's business operations.
   - Retrieves relevant sections from the business knowledge document and generates insights.

4. **Impact Assessment System**
   - Determines the effect of geopolitical events on key business areas:
     - **Supply Chain:** Import/export restrictions, raw material availability.
     - **Currency & Trade:** Exchange rate fluctuations, new tariffs.
     - **Consumer Behavior:** Changes in demand due to political instability.
     - **Regulations:** E-commerce laws, data privacy regulations.
   - Generates impact scores and suggestions for mitigation strategies.

## How It Works
1. The system fetches geopolitical events from the API.
2. It processes and categorizes events based on relevance.
3. The RAG model retrieves context from the business knowledge document.
4. The LLM generates a detailed assessment of the impact.
