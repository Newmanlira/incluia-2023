# INCLU.IA — School Accessibility and Educational Inclusion in Brazil

## About

INCLU.IA is a data analysis project examining school accessibility and educational inclusion in Brazil. This repository documents an analysis using public datasets from 2019 and 2023.

The accompanying White Paper, “O Código da Exclusão,” was published in December 2025.

## Research focus

This phase explores how public indicators of school accessibility relate to educational participation and attendance, with attention to students with disabilities and other support needs.

## Data sources and scope

The project report describes processing 840,872 records across three public datasets:

- **PNAD Contínua 2023 — Brazilian Institute of Geography and Statistics (IBGE):** 366,916 respondents.
- **National Health Survey (PNS) 2019 — IBGE:** 293,726 respondents.
- **School Census 2023 — National Institute for Educational Studies and Research (INEP):** 180,230 schools.

These datasets have different years and units of analysis. The reported total is the sum of records processed across the three sources; it does not represent a single unified student-level dataset.

## Methods

The project report describes data preparation and analysis across the three sources, a project-defined school accessibility score, state-level comparisons, and a benchmark of 12 classification algorithms.

The report identifies Random Forest as the top-performing classifier in that benchmark, with an F1 score of 0.2172 for the school-attendance outcome. This figure should be interpreted in context, alongside the model’s validation design and the distribution of the outcome classes.

## Findings reported by the project

- The project-defined accessibility score ranged from **1.53 in Amazonas** to **6.45 in the Federal District**.
- The White Paper reports a Pearson correlation of **r = -0.5747** between state-level accessibility and attendance indicators.

The reported correlation is an association at the state level. It does not establish that accessibility conditions caused changes in attendance.

## Limitations

The analysis uses public survey and administrative data collected in different years and for different purposes. The accessibility score is a project-defined measure, not an official government index.

Model estimates and simulated scenarios are not observed student outcomes. They should not be interpreted as proof that a specific intervention retained students or caused a change in attendance.

## Project development

This repository documents INCLU.IA’s analysis using the 2019 and 2023 datasets. A later phase examines the availability of support resources in municipal public-school networks using 2025 School Census data. That phase has a distinct scope and is documented separately.
