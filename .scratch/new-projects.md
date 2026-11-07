# Projects Missing From walkerenvres.com

Generated 2026-08-04 by searching `~/Dropbox/Work`, `~/Dropbox/Business` (contracts + invoices), and the NAS at `/Volumes/work`, cross-checked against your resume, your 179 GitHub repos, and the old blogdown site. **No files were modified** — read-only throughout.

The website currently has **23 project pages**. This search found **~60 additional distinct efforts**. They are not all website material, so they're sorted by what you'd actually do with them.

**Migration check:** nothing was lost in the blogdown→Quarto move. The Quarto site is a strict superset of the old one. Every gap below is a project that was never written up.

---

## How this is organized

| Tier | What it is | Count |
|---|---|---|
| 1 | Ready to add — client and scope confirmed by a signed contract or paid invoice | 21 |
| 2 | Substantial, but needs a decision from you before publishing | 7 |
| 3 | Updates or expansions to project pages you already have | 6 |
| 4 | Earlier career — CDM/CDM Smith, academic, and the family practice | 18 |
| 5 | Publications and software releases (candidate for a new page) | 16 |

---

# TIER 1 — Ready to add

Each of these is confirmed by a signed contract or paid invoice in `~/Dropbox/Business`, plus working files.

## 1. Klamath Basin Water Rights Adjudication — Expert Witness & Litigation Support
- **Client:** US Dept of Justice, Environment & Natural Resources Division, retained on behalf of the United States / Bureau of Indian Affairs as trustee for the Klamath Tribes. Frequently subcontracted through Aquatic Ecosystem Sciences LLC (Jacob Kann).
- **Case:** Klamath Basin Adjudication, Case No. 286, Claims 616 & 622 (Oregon Water Resources Dept. / Office of Administrative Hearings, now Klamath County Circuit Court)
- **Period:** 2010–2026, ongoing
- **Category:** Water Quality, Expert Testimony
- **Confidence:** High
- **Source:** `~/Dropbox/Work/klamath/adjudication`; `~/Dropbox/Business/contracts/klamath/` (13 contract folders); dozens of matching invoices
- **⚠ See "Decisions needed" below — this is active litigation work.**

The single largest, longest-running, and most consistently billed engagement in your entire record — and it has no website presence at all. Sixteen years analyzing how Upper Klamath Lake water levels affect water quality conditions for endangered Lost River and shortnose suckers, in support of the Klamath Tribes' federal water right claim. The work spans statistical and multivariate analysis, mechanistic modeling, review of newer USGS science, deposition and discovery support, and testimony. It continues Dr. William Walker's expert-witness role — his Affidavit and Direct Testimony is filed as Exhibit 286-US-500. Distinct from the Klamath Tribes / USFWS science work already listed.

**Two publications came out of this engagement**, which matters if you want to represent the work without touching the litigation itself:
- Kann, J. and J.D. Walker (2020), *Hydrobiologia* 847 — the crosstab water-quality-vs-lake-elevation methodology developed here
- Kann & Walker, "Comment on Krause et al. (2022)…" — submitted to a journal March 2026, status pending

Supporting deliverables are sensitive. Two memos in `~/Dropbox/Work/_reports/` — the 2017 "Evaluation of Lake Level Effects on Water Quality Relevant to Endangered Suckers" and the 2020 "Multivariate Modelling of Chlorophyll-a and pH" — are stamped **"Confidential — Attorney Work Product,"** and `adjudication/legal/` holds active 2025–2026 court filings. The published papers are safe to cite; the memos are not.

## 2. NOAA Whale Entanglement Risk Decision Support Tool (WHALE DST)
- **Client:** NOAA Fisheries / Northeast Fisheries Science Center, Atlantic Large Whale Take Reduction Team
- **Period:** 2024–present
- **Category:** Modeling, Decision Support, Web App
- **Confidence:** High
- **Source:** `~/Dropbox/Work/dst`; `~/Dropbox/Work/_manuscripts/2024-nefsc-whale-dst`

Multi-year redevelopment and validation of the model NEFSC and GARFO use to evaluate how fixed-gear fishery regulations — gear caps, rope strength, soak time, seasonal closures — trade off large whale entanglement risk against fishing revenue. You ported the legacy engine to a documented R codebase, validated new versions against the original across 23 named regulatory scenarios, and built a scenario-file converter. Documented in NOAA Technical Memorandum NMFS-NE-312 and published as Shank et al. (2025), *Frontiers in Marine Science*.

## 3. Makara Passive Acoustic Monitoring Database
- **Client:** NOAA Fisheries; used by NEFSC, SWFSC, MEDMR, DFO, NARWC, MITRE
- **Period:** 2025–2026, actively developed
- **Category:** Database, Web App
- **Confidence:** High
- **Source:** `~/Dropbox/Work/makara`

Full-stack database and data-management system for NOAA passive acoustic monitoring data — recordings, detections, tracks, deployment metadata. Includes the `makaraValidatr` R package for submission validation and an automated workflow for archiving recordings to NOAA's NCEI archive via TugBoat. Django/PostgreSQL, after earlier Oracle and NestJS iterations. This is the data backbone under PACM and the NOAA Passive Acoustics site you already list, but it's a distinct, separately named system.

## 4. Atlantic Salmon Federation — AI Data Platform & Eastern Canada Stream Temperature
- **Client:** Atlantic Salmon Federation (Val Ouellet, VP Research & Environment)
- **Period:** 2025–2026
- **Category:** Data Science, AI/ML, Database
- **Confidence:** High
- **Source:** `~/Dropbox/Work/asf`; `contracts/asf/2025-stream temp/ContractJeffWalker-Signed.pdf`

First transboundary AI-powered data platform for Atlantic salmon research and management: a RAG + LLM chat interface over habitat, temperature-model, and population datasets with an interactive dashboard. Groundwork completed so far includes a 74-source literature synthesis on stream temperature modeling and salmon thermal habitat in eastern Canada, and a systematic evaluation of 14 candidate hydrography datasets across three pilot basins in Nova Scotia, New Brunswick, Quebec, and Newfoundland.

## 5. Montana Fish Genetics Database (MT FishGen)
- **Client:** University of Montana Fish Conservation Genetics Lab / Montana Fish, Wildlife & Parks (Ryan Kovach)
- **Period:** 2024–2026, ongoing
- **Category:** Database, Data Science
- **Confidence:** High
- **Source:** `~/Dropbox/Work/mtfishgen`; `contracts/umt/2025-mt-fishgen/`

Statewide relational database, API, and admin dashboard tracking fish samples from field collection through genotyping (GTSeq, Fluidigm, microsatellite panels) for Westslope Cutthroat Trout, Bull Trout, and Arctic Grayling — with early work extending the schema to non-fish wildlife genetics.

## 6. Camera Trap Placement Optimization Platform (PGAFF)
- **Client:** Conservation Science Partners, Inc. (Justin Suraci, Arielle Parsons)
- **Period:** 2025–2026, ongoing
- **Category:** Web App, Spatial Optimization
- **Confidence:** High
- **Source:** `~/Dropbox/Work/pgaff`; `contracts/csp/202601-pgaff/`

Nuxt.js + Firebase + Google Cloud Run application that optimizes wildlife camera-trap placement across a study area from ecological covariates — tree cover, human footprint, species density, home range — using a two-stage R and Python greedy-or-genetic optimization pipeline. PGAFF = "Placement of cameras Given Animal and Forest Features."

## 7. NH Stream Crossing Prioritization Tool
- **Client:** NH Dept. of Environmental Services, via Fuss & O'Neill, with FB Environmental
- **Period:** 2025–2026, in development
- **Category:** Web App, GIS Decision Support
- **Confidence:** High
- **Source:** `~/Dropbox/Work/nhsci`; `contracts/fando/202601-nhdes-crossings/`

**This one is already in your resume PDF and has an orphaned `nhdes-crossings.png` sitting in the resume repo's `img/projects/` — it just never got a website page.** An interactive map-based tool (a custom widget in NHDES's ArcGIS Enterprise Experience Builder portal) letting users adjust weights across seven prioritization goals — flood risk, wildlife connectivity, public safety, cost — to rank stream crossings statewide for culvert-replacement funding.

## 8. Regional Stream Temperature Model for the Northeast US (NECASC)
- **Client:** Northeast Climate Adaptation Science Center (USGS); presented to Maine SWAP subcommittee and MEWTWG
- **Period:** 2024–present
- **Category:** Data Science, Modeling
- **Confidence:** High
- **Source:** `~/Dropbox/Work/necasc`; `~/Dropbox/Work/maine-swap/20250117`

Two-stage machine learning model — Mohseni logistic curves regionalized via XGBoost — predicting stream temperature across ungauged streams in 14 northeastern states. A 35 GB, ~500-target R `targets` pipeline with SHAP interpretability analysis and predictions across 281,000 flowlines, trained on 13,000+ monitoring stations. Sole-authored manuscript in preparation for *JAWRA*. This is the regional successor to MASTATH.

## 9. EPA SNEP — State of the Region Report Water Quality Analysis
- **Client:** Comprehensive Environmental Inc. (CEI), prime contract with US EPA Region 1 (SNEP, Contract 68HE0118A0001)
- **Period:** 2022–present
- **Category:** Water Quality, Data Analysis
- **Confidence:** High
- **Source:** `~/Dropbox/Work/snep/srr`; `contracts/cei/202209-epa-snep/`

Compiles and analyzes multi-decade water quality monitoring data from Narragansett Bay-region partners (RIDEM, MassDEP, EPA, URI, APCC) for EPA's Southeast New England Program State of the Region reporting — including data-gap analysis, statistical-methods recommendations, and continuous-monitoring temperature analysis.

## 10. SNEP Ecohealth / Environmental Threshold Tool (ETT)
- **Client:** US EPA Southeast New England Program, via CEI and Hodge.WaterResources
- **Period:** 2022–2026
- **Category:** Data Science, Web Tool
- **Confidence:** High
- **Source:** `~/Dropbox/Work/snep/ett`; `contracts/cei/202311-epa-snep-ett/`

Data pipeline and screening-criteria methodology behind SNEP's threshold tool, compiling and standardizing water quality data from federal, state, and regional providers across the Southeast New England coastal watershed. Same structure as the MassBays ETT you already list, built for a different EPA-funded region.

## 11. Connecticut Statewide Lake Nutrient TMDL — Technical Review & Modeling
- **Client:** FB Environmental Associates and Horsley Witten Group, for US EPA Region 1 / CT DEEP
- **Period:** 2019–2021
- **Category:** Water Quality Modeling, TMDL
- **Confidence:** High
- **Source:** `~/Dropbox/Work/ct-tmdl`; `contracts/fbe/201912-fbe-ct-tmdl/`

Nutrient loading model calibration and validation for Lake Lillinonah and Lake Zoar on the Housatonic River, using the Lake Loading Response Model (LLRM) and USACE BATHTUB, plus senior review of the QAPP and model execution.

## 12. Critical Linkages Aquatic Connectivity Scenario Tool
- **Client:** Scott Jackson, UMass Amherst Dept. of Environmental Conservation
- **Period:** 2018 (build May–July; updates through April 2019)
- **Category:** Web App
- **Confidence:** High
- **Source:** `~/Dropbox/Work/ecosheds/clsb`; `contracts/usgs/201805-umass-critical-linkages/`

A $30,000 fixed-price build in three tasks: a PostgreSQL/PostGIS database, an R Shiny prototype, and a production Leaflet/D3/Vue.js web application for evaluating aquatic connectivity and stream-crossing improvement scenarios, hosted on the EcoSHEDS platform.

## 13. Massachusetts Coldwater Refugia Tool
- **Client:** USDA Forest Service, Northern Research Station
- **Period:** 2020 (related MassWildlife work 2018–2023)
- **Category:** Web App, Modeling
- **Confidence:** High
- **Source:** `contracts/usgs/202002-usfs-ma-coldwater-refuge/`; `~/Dropbox/Work/ecosheds/refugia`, `bto-model`, `masswildlife`

Web development visualizing brook trout coldwater refugia using the SHEDS occupancy model. A distinct funder and deliverable from the 2023 MassWildlife MASTATH work already listed. Related MassWildlife threads in the same folders: a formal review of the SHEDS brook trout occupancy model (Jan 2021) and coldwater refugia modeling for the FY23 State Wildlife Action Plan.

## 14. Interactive Catchment Explorer (ICE) — the family
- **Client:** USGS and multiple regional partners (see below)
- **Period:** 2014–2024
- **Category:** Web App
- **Confidence:** High
- **Source:** `~/Dropbox/Work/ecosheds/ice-*`, `norock`, `nps-ner`, `gis/deerfield`

ICE is a genuine flagship with **seven documented regional deployments**, and the website mentions it only obliquely inside the broad EcoSHEDS entry. It's also the subject of your 2020 *Water* paper. Suggest one strong ICE page with the variants as a list, or a page for the flagship plus separate pages for the two contract-backed variants (CHaMP and NPS).

| Variant | Client | Period | Confidence |
|---|---|---|---|
| ICE Northeast (flagship) | USGS / multi-state NE partners | ~2014–2019 | High |
| ICE Crown of the Continent (CCE) | USGS NOROCK; ties to North Central CASC, NIDIS, Alberta Environment & Parks | 2016–2024 | High |
| ICE for NPS Northeast Region (coldwater refugia) | National Park Service | 2020–2021 | High |
| ICE for CHaMP | South Fork Research Inc., funded by Bonneville Power Administration | 2015–2020 | High (signed contract) |
| ICE Deerfield River | "Deerfield Resiliency Group" stakeholders | 2015 | Med-High |
| ICE for EBTJV | Eastern Brook Trout Joint Venture | 2015–2020 | Medium |
| ICE for Designing Sustainable Landscapes | UMass Amherst Landscape Ecology Program | 2015–2016 | Medium |

## 15. Maine Stream Temperature Monitoring & Modelling Network (MEWTWG)
- **Client:** Maine Eastern Brook Trout / Water Temperature Working Group; Maine Outdoor Heritage Fund grant; Maine DIFW
- **Period:** 2015–2026, ongoing
- **Category:** Database, Modeling
- **Confidence:** High
- **Source:** `~/Dropbox/Work/ecosheds/mewtwg`, `~/Dropbox/Work/mewtwg`

Eleven years of technical support — data QA/QC, stream temperature model review, SOPs, targeted data exports. MOHF final report Jan 2022; formal model review presented Nov 2021; Penobscot data export May 2026.

## 16. Lake Winnipesaukee State of the Lake Report
- **Client:** Lake Winnipesaukee Alliance, via FB Environmental Associates
- **Period:** 2025–2026, ongoing
- **Category:** Water Quality, Data Science, GIS
- **Confidence:** High
- **Source:** `~/Dropbox/Work/lake-winni`; `contracts/fbe/202511-lwa/`

Review of five decades of monitoring data, a data crosswalk integrating NH DES and UNH Lakes Lay Monitoring Program records, HUC-12 watershed delineation, and Google Earth Engine remote-sensing analysis of shoreline development and built-surface change in Wolfeboro.

## 17. Maquoit Bay Watershed Nutrient Loading Model
- **Client:** FB Environmental Associates (Brunswick, Maine / Casco Bay area)
- **Period:** 2025–2026
- **Category:** Modeling, Water Quality
- **Confidence:** High
- **Source:** `~/Dropbox/Work/maquoit`; invoice `202605 - FBE - Maquoit Bay Modeling`

SWAT+ watershed hydrology and nutrient loading model for the Maquoit Bay watershed, superseding an earlier HSPF model, incorporating water quality logger data, septic-system records, and multiple land-use and climate scenarios — with FB Environmental staff working under your technical direction.

## 18. Mystic River Watershed TMDL Alternative
- **Client:** MassDEP via Eastern Research Group (Work Assignment 4-61); partner MyRWA
- **Period:** 2013–2020 (formal ERG contract Feb 2017 – Jan 2020)
- **Category:** Modeling, Report
- **Confidence:** High
- **Source:** `~/Dropbox/Work/myrwa/tmdl`; `contracts/myrwa/201701-erg-mystic-tmdl/`

A Phase I water quality data review, a watershed conceptual model, and the final combined "TMDL Alternative" report — tracing back to a 2013 flow and phosphorus mass-balance study. Distinct from the three MyRWA projects already on the site.

## 19. Shannon Beach Bacteria Prediction Model & CSO/Stormwater Analysis
- **Client:** Mystic River Watershed Association
- **Period:** 2024–2025
- **Category:** Data Science, Water Quality Modeling
- **Confidence:** High
- **Source:** `~/Dropbox/Work/myrwa-closure`; `contracts/myrwa/202411-myrwa-beach-closure-cso/`

XGBoost model predicting enterococcus levels at Shannon Beach on Upper Mystic Lake from USGS streamflow and Daymet weather data, supporting beach closure and advisory decisions — plus a CSO/stormwater literature review and analysis memo for the Alewife Brook watershed.

## 20. Trout Unlimited — FERC Hydropower Reviews (two engagements)
- **Client:** Maine Council of Trout Unlimited
- **Category:** Report, Regulatory Review, GIS
- **Confidence:** High
- **Source:** `~/Dropbox/Work/tu/ripogenus`, `~/Dropbox/Work/tu/western-maine-energy-storage`

**Ripogenus & Penobscot Mills Relicensing (2023)** — technical review and comments to FERC on Brookfield's relicensing study plans for projects P-2572/P-2458 on the West Branch Penobscot River.

**Western Maine Energy Storage (2025)** — drainage basin delineation and mapping via USGS StreamStats and GIS for a proposed 500 MW pumped-storage project near Dixfield, supporting TU's review of the FERC preliminary permit application.

## 21. Maine Healthy Beaches — Beach Action Value Assessment
- **Client:** Maine Healthy Beaches Program (Maine DEP / UMaine Extension, EPA-funded)
- **Period:** 2014–2016
- **Category:** Report, Water Quality
- **Confidence:** High
- **Source:** `/Volumes/work/mhb`

Data analysis supporting the Beach Action Value justification report — an EPA-required update to Maine's beach bacteria advisory threshold. The report explicitly credits "the extensive support from Jeff Walker (Walker Environmental Research)" and includes an "Appendix A BAV Data Summary (Walker Environmental Research)."

---

# TIER 2 — Substantial, but needs your decision

## 22. The Federico & Associates body of work ⚠
- **Period:** 2015–2026 (a decade of files)
- **Source:** `~/Dropbox/Work/federico` (21 subfolders); ~25 GitHub repos

**There's a contradiction here you need to resolve.** The folder holds a decade of substantial South Florida water management work, but the business records show **no Federico invoices anywhere from 2010 to 2026**, and the only contract is `contracts/federico/Agreement 2026 - Walker.pdf` — a standard employee confidentiality/NDA agreement "effective on your first day of employment."

So either you subcontracted for years under a billing arrangement not captured in the invoices folder, or this has always been employment and the work product belongs to the employer. Either way the work is real and substantial; whether it's *your* portfolio is your call.

What's in there:

| Sub-project | Period | Notes |
|---|---|---|
| Grove Land Reservoir/STA (GLRSTA) water quality & supply modeling | 2015–2026 | DMSTA + reservoir/STA simulation for design, permitting, CERP scenarios on the C-25 Reservoir, part of Indian River Lagoon-South restoration. Likely Hazen and Sawyer as prime. Active meetings July 2026. |
| Florida Sugar Cane League regulatory & compliance support | ~2016–2026 | EAA nutrient load accounting, WQBEL analysis, STA performance tracking, South Florida Environmental Report chapters, Caloosahatchee/St. Lucie estuary TMDL/BMAP HSPF modeling, web compliance trackers |
| Watershed Technologies remote monitoring & dosing system | 2023–2026 | Real-time flow/dosing/water quality/camera telemetry across South Florida alum treatment sites; FDEP permit compliance reporting |
| Basinger Dairy legacy phosphorus mass balance | 2024 | SFWMD Agreement 4600004902, alongside a Univ. of Florida soil assessment |
| Miccosukee Tribe water depth criteria review | 2014–2017 | Hydrologic analysis and memo on Modified Water Deliveries standards affecting Miccosukee WCA lands |
| Lake Okeechobee tributary load estimation tool | 2017 | Fisheating Creek, Indian Prairie, Lake Istokpoga, Kissimmee, Taylor Creek-Nubbin Slough |

## 23. Susitna-Watana Hydroelectric FERC Relicensing Review
- **Client:** NOAA NMFS Alaska, via Kier Associates
- **Period:** 2013–2016
- **Category:** Report, Technical Review
- **Confidence:** Med-High
- **Source:** `/Volumes/work/susitna`; invoices `NMFS-AK_2014xx` through `2016xx`

**This resolves a mystery** — the business records showed recurring "NMFS-AK / Kier Associates" invoices from 2014–2016 with no documented scope. The NAS has it: independent technical review of hydrologic and flow-routing modeling and integrated modeling/decision-support approaches for the Alaska Energy Authority's Susitna-Watana FERC relicensing studies.

## 24. Everglades Phosphorus & Flow Trend Analysis
- **Client:** US Dept. of the Interior and US EPA, in collaboration with William W. Walker, Jr.
- **Period:** 2012–2025 (intermittent)
- **Category:** Water Quality, Data Analysis
- **Confidence:** High for the work; the question is attribution
- **Source:** `~/Dropbox/Work/everglades`; `/Volumes/work/everglades`

**Also resolves a mystery** — Everglades invoices recur from 2012 to 2019 with no client name recorded. You're credited as co-author on the 2014 report "Trends in Total Phosphorus Concentration and Flow at Monitoring Sites Within and Upstream of Everglades National Park" (56 SFWMD monitoring sites, WY2003–2014, with a Google Earth interface at wwwalker.net/ever). You also built a Seasonal-Kendall trend analysis and a web viewer/dashboard pulling from SFWMD's DBHydro. Work continued through a July 2025 spatial analysis update covering 1979–2024. **Decide how you want to present joint work with your father.**

## 25. Onondaga Lake Water Quality & Bacteria Trend Analysis
- **Client:** Onondaga County Dept. of Water Environment Protection, via Ecologic LLC (2011) and Upstate Freshwater Institute (2013)
- **Period:** 2011–2019 (invoices 2011, 2015, 2019; reports 2011, 2013)
- **Category:** Water Quality, Trend Analysis
- **Confidence:** Med-High for 2011–2015; the 2019 scope is undocumented
- **Source:** `~/Dropbox/Work/_reports/2011-onondaga`, `2013-onondaga`; `/Volumes/work/onondaga`

Nearshore water quality trend analysis for the Onondaga Lake Ambient Monitoring Program (2011) and tributary fecal coliform analysis (2013), both co-authored with William W. Walker, Jr., plus Seasonal Mann-Kendall trend work on Onondaga Creek and Harbor Brook through 2015. Same joint-attribution question as Everglades.

## 26. Tova Earth — Water Risk Data Platform
- **Client:** University of Massachusetts (billing), PI at Brown University, NSF Accelerating Research Translation "FINE ARTS" award
- **Period:** 2024–2025
- **Category:** Modeling, Web App
- **Confidence:** High for the contract; Medium on deliverable detail
- **Source:** `~/Dropbox/Work/tova`; `contracts/tova/202409-tova-mvp/`

A cloud-hosted proof-of-concept platform demonstrating water-risk assessment for sites across the US, delivered as an outside-expert contract for an NSF-funded startup translation project. Product referred to internally as "WaterProof." Working files include river-basin climate scenario modeling — water rationing frequency versus precipitation change under RCP8.5 GCM ensembles, and comparison of direct potable reuse / ASR / indirect potable reuse / desalination options with a Santa Cruz case study. **The primary design documents wouldn't open, so the scope description is thin — worth a look before writing this up.**

## 27. AKSSF — Alaska Statewide Temperature & Chinook Recruitment Modeling
- **Client:** Univ. of Alaska Anchorage / Alaska Center for Conservation Science, funded by the Alaska Sustainable Salmon Fund
- **Period:** 2026–2028 (start 3/1/26)
- **Category:** Data Science, Modeling
- **Confidence:** Med-High (signed SOW and PO; no invoices yet, consistent with the start date)
- **Source:** `~/Dropbox/Work/akssf`; `contracts/uaa/202604-akssf/`

Builds on AKTEMP to create statewide paired air/water temperature models, interpolate to unmonitored sites, and model Chinook salmon stock-recruitment against warming. Already fitting Mohseni models at 460 Alaska stations (81% with RMSE under 1.5°C). **A 2.5-year project just getting started — you may want to wait until there's something to show.**

## 28. Chesapeake Bay Regional Assessments Data Explorer
- **Client:** USGS Eastern Ecological Science Center, Chesapeake Science Program (PI Stephanie Gordon), with NFWF and Chesapeake Conservancy
- **Period:** FY2026, in development
- **Category:** Web App, Data Visualization
- **Confidence:** High for the study plan; **conflicting evidence on award status**
- **Source:** `~/Dropbox/Work/chesbay`

An EcoSHEDS/ICE-based tool replacing an expensive ArcGIS Online system for Chesapeake stream condition, fish habitat, and fish health assessment data — interactive maps, dynamic filters, catchment summaries, generated PDF reports.

**⚠ Conflict:** the proposals folder files "USGS Chesapeake Bay data visualization" and "Chesapeake Bay temperature model" (both 2025) as bids with no matching contract — but `chesbay` contains an official USGS FY26 Study Plan naming a PI. At least one of those bids appears to have been won. Worth confirming.

---

# TIER 3 — Updates to pages you already have

## 29. EcoSHEDS Water Temperature Database v2 — the rebuild
Your existing `ecosheds-temp-db` page says "currently being rebuilt from scratch." **This is that rebuild, and it's much bigger than the current page suggests.** A Django/PostgreSQL+TimescaleDB/Nuxt ground-up redesign expanding beyond the Northeast to eastern Canada (funded partly by the Atlantic Salmon Federation) and the Southeast US/Gulf Coast, with a unified schema, provider and role-based access control, automated QA/QC, and a REST API. Full PRD, design, migration, and roadmap documents dated April–June 2026 in `~/Dropbox/Work/mewtwg/meetings/20260604-spring meeting/database`.

## 30. USGS RESTORE — the data releases
Your `usgs-lmg-restore` page covers the visualization tool only. The engagement also produced **nine published ScienceBase data releases** (gage covariates, flow statistics, trends, timeseries, solar radiation, eco-flow relationships, and HUC12 covariates/quantiles/solar — all for the southeastern US, 1950–2010) and ran a technical advisory committee from 2018 through at least 2023. Source: `~/Dropbox/Work/ecosheds/lmg-restore/data/sources.yml`.

## 31. FPE ROAR — the EPA-funded extension
- **Client:** US EPA Office of Research and Development, Regional Applied Research Program (ROAR Project #2554)
- **Period:** 2022 (proposal) – 2025 (Year 1 and Year 2 final reports)
- **Confidence:** High
- **Source:** `~/Dropbox/Work/fpe/roar`; `~/Dropbox/Work/_reports/2025-fpe-roar-1`, `-2`

A **distinct funder** from the USGS base platform, with its own proposal, approved QAPP (L-ICSD-0034150-QP-1-0, 2024), and two annual final reports authored under the Walker Environmental Research name. Human-ranking-based machine learning models estimating relative streamflow from timelapse camera imagery. Year 1 delivered the main report plus a model-transferability memo assessing performance across sites; Year 2 extended the approach to wetlands, lakes, algal biomass, snow depth, and coastal seabird density. Either its own page or a prominent section on the FPE page.

## 32. The rest of the MyRWA relationship
Three MyRWA projects are listed; the folder shows a **twelve-year, ten-thread relationship**. Beyond the TMDL and beach-closure entries above:

| Thread | Period | Notes |
|---|---|---|
| myrwaR package & MysticDB database management | 2013–2026 | Master Access database plus R package for loading, QA/QC, reporting; EPA WQX submission via MassWateR. **Still active — files dated July 2026.** Your longest continuous MyRWA thread. |
| Phosphorus & nutrient monitoring program | 2015–2023 | Autosampler and grab-sample P/chlorophyll monitoring; SAP and SOP design |
| Malden River water quality analysis | 2015–2016 | 23-page exploratory analysis of 2000–2015 MyRWA/MWRA data, EPA Urban Waters funded |
| Hotspot bacterial assessment reporting system | 2014–2016 | R Markdown/LaTeX tooling letting field staff auto-generate standardized reports per sampling event |
| Herring run-size estimation (MA DMF St2WRS method) | 2017–2018 | Converts partial volunteer and video counts into annual run-size estimates; data-linked to the video count site but methodologically distinct |
| Annual EPA water quality grade assessment | 2014–2015 | Reproduces and extends EPA Region 1's bacteria-based report card |
| Stormwater quality monitoring (EMC/MS4) | 2013–2014 | ~12 storm events with autosampler/sonde SOPs, feeding the TMDL model |
| Dissolved oxygen / salt wedge surveys | 2014–2016 | Boat and buoy surveys on stratification and DO impairment; no standalone final report found |
| MS4 permit TP load review | 2025 | Memo reconciling Draft 2024 MA MS4 Permit loads against the Mystic Alternative TMDL |
| Mystic/Aberjona FEMA flood model | ~2012–2014 | Substantial HEC-HMS/HEC-RAS build-out, but **no client or deliverable identified** — verify before listing |

## 33. Other herring deployments
`plymouthriverherring.org` served the Town of Plymouth / NSRWA Town Brook run (2020–2022), and GitHub shows separate `herring-nsrwa-video` and `herring-ply-video`/`-data` repos. The website presents herring video counting as a Mystic-only project; it's actually **a platform deployed to at least three river systems.**

## 34. Other EcoSHEDS threads worth surfacing
- **SHEDS Upper Midwest Stream Temperature Database & Climate-AIS Risk Assessment** (2020–2023) — database and model for WI/MI/MN from state DNR data, plus a draft climate-driven aquatic invasive species risk assessment
- **Delaware River PIT Tag Movement & Survival Study** (field 2018–2019, analysis 2022) — capture-mark-recapture survival modeling with USGS (Ben Letcher), NY DEC, and PA Fish & Boat; public Flourish data story at https://public.flourish.studio/story/1760760/
- **Upper Mississippi River Asian Carp Data Management (carpDAT/UMRACT)** (2020–2021) — data management feasibility report with USFWS La Crosse

---

# TIER 4 — Earlier career

Clearly outside the Walker Environmental Research era. Included because you asked for everything found; label the era if you use any of it.

## CDM / CDM Smith (prior employer, ~2007–2015)
| Project | Client | Period | Confidence |
|---|---|---|---|
| Salem & Beverly Water Supply Board firm yield / HSPF modeling | SBWSB (Massachusetts) | 2009–2015 | High |
| Blackstone River watershed HSPF model | Unknown (Blackstone spans MA/RI) | 2008–2009 | High |
| Brazos River Authority WCRRW system modeling | Brazos River Authority, Texas | 2008–2010 | High |
| ExxonMobil stormwater & dry-weather-flow engineering | ExxonMobil | 2008–2009 | High |
| NetSTORM rainfall disaggregation software | Internal CDM tool | ~2007–2012 | Med-High |
| ALCOSAN preliminary determination report | Allegheny County Sanitary Authority | 2010 | Med-High |
| Lake Qarun lake modeling | Egyptian lake management program | 2008–2009 | Med-High |
| LOFT STELLA reservoir modeling | Likely SFWMD (Lake Okeechobee watershed) | 2007–2008 | Medium |
| Merrimack River water supply study | Unknown (MA/NH) | 2008 | Medium |
| Single-memo clients: Corkscrew Mine, Hartford CT, Worcester MA, Harvard Univ., NYC DEP, ERBD | Various | 2007–2009 | Medium |

## Academic (UMass Amherst, 2013–2015)
**Postdoctoral research** under Dr. Casey Brown, Civil & Environmental Engineering — three named tasks: the `weathergen` stochastic weather generator R package (with a report for the US Army Corps of Engineers); **ViRTUE**, a climate stress-test tool for USACE's Institute for Water Resources applied to United Water's Lake DeForest reservoir; and early conceptual work on "CloudWater." Published as Whateley, Walker & Brown (2015), *Environmental Modelling & Software*.

## Family / predecessor practice (William W. Walker, Jr.)
| Project | Client | Period | Confidence |
|---|---|---|---|
| Lake Champlain / Missisquoi Bay phosphorus TMDL — BATHTUB modeling | Vermont DEC / EPA Region 1, Tetra Tech prime | 2011–2012 | High |
| P8 Urban Catchment Model — maintenance, distribution, MPCA update proposal | Public-domain model; MPCA | 2007–2024 (v3.5 released Feb 2024) | High |
| BATHTUB model .NET port & maintenance | Software tool | ~2006–2011 | Medium |
| Little Rock Lake (MN) phosphorus TMDL | Benton County SWCD, Foley MN | 2010 | Low — report signed solely by WWW Jr. |
| Sauk River Chain of Lakes (MN) | Likely MPCA/MN DNR | ~2010 | Low — no document names you as author |
| Estabrook Woods GIS mapping (Concord MA) | Unknown, possibly pro bono | 2004–2005 | Low |

## Other pre-WalkerEnvRes
**SONCC Coho Salmon Hydrologic Alteration Assessment** (2013) — Mann-Kendall trend analysis and antecedent-precipitation-index regression of streamflow and precipitation for NOAA Fisheries (Arcata) coho recovery planning, subcontracted through Riverbend Sciences (Eli Asarian). High confidence. Led to Asarian & Walker (2016), *JAWRA*. Source: `/Volumes/work/riverbend`.

---

# TIER 5 — Publications & software

Your resume lists 8 selected publications; the archive shows **at least 12 published plus 3 in the pipeline**. A `/publications` page may be worth more than several individual project pages.

**Not currently on your resume or website:**
- Walker JD, Walter MT, Parlange JY, et al. (2007). Reduced raindrop-impact driven soil erosion by infiltration. *J. Hydrology* 342(3-4):331–335. doi:10.1016/j.jhydrol.2007.06.003
- Parasiewicz P, Walker JD (2007). Comparison of MesoHABSIM with two microhabitat models (PHABSIM and HARPHA). *River Res. Appl.* 23:904–923. doi:10.1002/rra.1043
- Howarth R, et al. incl. Walker JD (2014). Metabolism of a nitrogen-enriched coastal marine lagoon during the summertime. *Biogeochemistry*. doi:10.1007/s10533-013-9901-x
- **Asarian JE, Walker JD (2016). Long-term trends in streamflow and precipitation in Northwest California and Southwest Oregon, 1953–2012. *JAWRA* 52(1):241–261. doi:10.1111/1752-1688.12381**
- Starosta LE, Westphal KS, Walker JD (2011). Simple management tools to reduce water pumping based on hydrologic probabilities and supply shortage risk quantification. Conference paper (CDM).

**In the pipeline:**
- *In review:* "An integrated drought early warning system for cold-water fisheries management," *Fisheries* MS FSH-2026-0009 — describes FishCast, relates to your TroutCast page
- *In production:* Fuller et al. incl. Walker JD, MS 2025046 — Massachusetts spatial stream network / coldwater habitat, likely the MASTATH publication
- *In preparation:* Walker JD (sole author), "A Regional Stream Temperature Model for the Northeast United States…", target *JAWRA* — the NECASC project

**Software release:** Walker JD, Gupta A, Fair JH, Goodling PJ, Letcher BH (2025). Streamflow Rank Estimation (SRE) Model. USGS Software Release. doi:10.5066/P1YSANVM

---

# Decisions needed

1. **Klamath adjudication (#1).** Active federal litigation, and two supporting memos are stamped "Confidential — Attorney Work Product." It's your biggest engagement by far, but you may be omitting it on purpose. If you do list it, describe the role generically and cite only the published Kann & Walker (2020) paper.
2. **Federico (#22).** Employment or subcontract? Determines whether a decade of South Florida work is portfolio material.
3. **Joint work with your father** (Everglades #24, Onondaga #25, Champlain, P8, BATHTUB). Several deliverables are co-authored, several are his alone with you supporting. How do you want to represent this?
4. **Chesapeake (#28).** Won or lost? The proposals folder and the `chesbay` study plan disagree.
5. **Prior-employer work (Tier 4).** CDM projects are real but belong to CDM. Include as career history, or leave off?
6. **Naming.** Your resume says "FishCast," the website says "TroutCast," and the in-review paper says "FishCast." Worth reconciling.

# Search coverage

**Searched:** all 55 `~/Dropbox/Work` folders; `~/Dropbox/Business/contracts`, `/proposals`, `/invoices`; all of `/Volumes/work` except `#recycle`. Cross-checked against the resume repo, 179 GitHub repos, and the blogdown site.

**Verified as already fully covered** (checked specifically for hidden sub-projects, found none beyond what's noted above): the `klamath`, `noaa`, and `fpe` folders. Everything in them maps cleanly to existing website entries except the adjudication (#1) and FPE ROAR (#31). Notably, `noaa/admin/PAM Project Charter(signed).pdf` (2023) confirms the scope of your existing NOAA pages — growing PACM into a national application and moving passive-acoustic data processing to the cloud — and `noaa/transfers/20181217 - demo data` shows the data pipeline predates the PACM name, so that engagement actually runs from 2018, not 2021.

**Deliberately skipped:** `Business/finances`, `/insurance`, `/llc`, `/legal`, `/resume`, `/brand`, `/market research`, `/societies` — no financial or personally sensitive data was read.

**Known gaps, available on request:**
- ~20 unopened zip archives in `/Volumes/work/CDM/proj` — names suggest Tarrant Regional Water District, Hampton Roads Sanitation District, Frito-Lay, and several New England towns
- Most `/Volumes/work/gis` subfolders (platte, ontario, hubbard_brook, great_lakes, ithaca, and others) listed but not opened
- `~/Dropbox/Work/_talks` and `_news` skimmed rather than exhaustively read

**Confirmed lost bids** (in proposals, no contract — deliberately excluded): EOR 2013, MPCA 2015, NOAA GARFO Atlantic Salmon 2016, Kier/EPA SFAM 2016, Woodard & Curran OptiRTC 2016, NALCC 2017, Hydroanalysis/MassDEP 2018, CASC 2019/2020, EcoLucid NJ 2019, EPA EIN 2022, USGS WAWSC 2022, MassDEP Climate Refugia 2022, USGS NGWOS 2022, Texas Tech/NASA 2025, CEI/MassDEP SEEP2 2025, TU Snake River 2025, WNC stream temperature 2025, VTWD 2026, IOOS 2026, USGS FPE Zion 2026, USGS SECASC 2026.
