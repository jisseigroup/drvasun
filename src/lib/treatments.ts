export type TreatmentCondition = {
  name: string;
  description: string;
};

export type Treatment = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  overview: string[];
  conditions: TreatmentCondition[];
  symptoms: string[];
  treatments: string[];
  whenToVisit: string[];
  parent?: "ear" | "nose" | "throat";
};

export const mainTreatments: Treatment[] = [
  {
    slug: "ear-treatment",
    title: "Ear Treatment",
    shortDescription:
      "Comprehensive diagnosis and care for ear infections, hearing issues, and balance disorders.",
    description:
      "Expert ear care for infections, hearing loss, tinnitus, and balance problems — tailored for children and adults across Noida & Delhi NCR.",
    overview: [
      "The ear is essential for hearing and balance. Conditions affecting the outer, middle, or inner ear can cause pain, discharge, hearing difficulty, dizziness, and reduced quality of life.",
      "At Dr. Vasun Batra's ENT Centre, every patient receives a detailed otoscopic examination, hearing assessment when needed, and a treatment plan based on current ENT guidelines — whether the condition needs medicines, procedures, or surgery.",
      "Dr. Batra has extensive experience in paediatric and adult ear disease, including chronic infections, glue ear, and tympanic membrane perforations.",
    ],
    conditions: [
      {
        name: "Ear infections (otitis media & externa)",
        description:
          "Acute and recurring infections of the ear canal or middle ear, often causing pain, fever, and temporary hearing loss.",
      },
      {
        name: "Hearing loss & wax impaction",
        description:
          "Conductive hearing loss from wax, fluid, or eardrum problems; evaluation and safe removal or medical treatment.",
      },
      {
        name: "Tinnitus & vertigo",
        description:
          "Ringing in the ears and balance disturbances assessed to identify treatable causes.",
      },
      {
        name: "Perforated eardrum",
        description:
          "Holes in the tympanic membrane from infection or injury; monitoring or surgical repair (tympanoplasty) when indicated.",
      },
    ],
    symptoms: [
      "Ear pain, fullness, or blockage",
      "Discharge from the ear",
      "Reduced or muffled hearing",
      "Ringing or buzzing (tinnitus)",
      "Dizziness, spinning, or imbalance",
      "Frequent ear infections in children",
    ],
    treatments: [
      "Otoscopic examination and audiometry when required",
      "Antibiotics, ear drops, and pain management",
      "Microsuction and professional ear cleaning",
      "Grommet (ventilation tube) insertion for glue ear",
      "Tympanoplasty and mastoid surgery for chronic disease",
      "Counselling for tinnitus and vestibular rehabilitation referrals",
    ],
    whenToVisit: [
      "Ear pain lasting more than 1–2 days",
      "Persistent discharge or bleeding from the ear",
      "Sudden or progressive hearing loss",
      "Child with speech delay or recurrent ear infections",
      "Prolonged dizziness or vertigo",
    ],
  },
  {
    slug: "nose-treatment",
    title: "Nose Treatment",
    shortDescription:
      "Expert care for sinusitis, nasal obstruction, allergies, and disorders of the nose and paranasal sinuses.",
    description:
      "Specialized nose and sinus care — allergies, sinusitis, nasal blockage, polyps, and minimally invasive endoscopic surgery when needed.",
    overview: [
      "Nasal and sinus problems are among the most common reasons patients visit an ENT specialist. Blocked nose, facial pressure, sneezing, loss of smell, and chronic sinus infections can affect sleep, work, and daily comfort.",
      "Dr. Vasun Batra has a special interest in disorders of the nose and paranasal sinuses. She offers comprehensive evaluation including endoscopic examination and coordinates imaging when required.",
      "Treatment may include medical therapy (nasal sprays, antihistamines, antibiotics), allergy management, or endoscopic sinus surgery (FESS) and septoplasty for structural blockage that does not respond to medicines.",
    ],
    conditions: [
      {
        name: "Allergic rhinitis",
        description:
          "Seasonal or perennial allergy causing sneezing, itchy nose, watery eyes, and congestion; managed with avoidance, sprays, and medications.",
      },
      {
        name: "Chronic sinusitis",
        description:
          "Long-standing sinus inflammation with facial pain, thick discharge, and reduced smell; medical or surgical treatment based on severity.",
      },
      {
        name: "Deviated nasal septum",
        description:
          "Crooked septum blocking airflow; septoplasty improves breathing when conservative care is insufficient.",
      },
      {
        name: "Nasal polyps",
        description:
          "Benign growths in the nose/sinuses causing blockage and smell loss; treated medically or with endoscopic removal.",
      },
      {
        name: "Epistaxis (nosebleeds)",
        description:
          "Frequent or heavy nosebleeds evaluated and treated with cautery, packing, or addressing underlying causes.",
      },
    ],
    symptoms: [
      "Stuffy or blocked nose on one or both sides",
      "Facial pain, pressure, or headache",
      "Thick nasal discharge or post-nasal drip",
      "Reduced sense of smell or taste",
      "Frequent sneezing and nasal itching (allergy)",
      "Recurrent nosebleeds",
      "Snoring or mouth breathing",
    ],
    treatments: [
      "Nasal endoscopy and allergy assessment",
      "Nasal steroid sprays, antihistamines, and saline irrigation",
      "Antibiotics for acute bacterial sinusitis",
      "Septoplasty for deviated septum",
      "Functional endoscopic sinus surgery (FESS)",
      "Polypectomy and management of chronic rhinosinusitis",
    ],
    whenToVisit: [
      "Nasal blockage not improving with over-the-counter medicines",
      "Sinus symptoms lasting more than 10–12 days or recurring frequently",
      "Facial pain with fever and coloured discharge",
      "Loss of smell persisting for weeks",
      "Recurrent or heavy nosebleeds",
    ],
  },
  {
    slug: "throat-treatment",
    title: "Throat Treatment",
    shortDescription:
      "Specialized care for voice disorders, tonsillitis, swallowing difficulties, and throat conditions.",
    description:
      "Complete throat and larynx care — sore throat, hoarseness, tonsil problems, swallowing difficulty, and paediatric ENT conditions.",
    overview: [
      "Throat and voice disorders can affect speaking, swallowing, breathing, and sleep. The larynx (voice box), pharynx, and tonsils are examined carefully to find infection, inflammation, vocal strain, or structural issues.",
      "Dr. Vasun Batra evaluates adults and children with persistent sore throat, hoarseness, difficulty swallowing, chronic cough, and snoring related to enlarged tonsils or adenoids.",
      "Management ranges from voice rest and medication to procedures such as tonsillectomy, adenoidectomy, or microlaryngoscopy when a detailed view of the vocal cords is required.",
    ],
    conditions: [
      {
        name: "Tonsillitis & adenoid hypertrophy",
        description:
          "Recurrent throat infections or enlarged tonsils/adenoids causing pain, fever, or obstructed breathing in children.",
      },
      {
        name: "Hoarseness & voice strain",
        description:
          "Persistent voice change from overuse, reflux, nodules, or laryngeal inflammation; laryngoscopy for accurate diagnosis.",
      },
      {
        name: "Laryngopharyngeal reflux (LPR)",
        description:
          "Acid reflux affecting the throat causing cough, throat clearing, and hoarseness; diet, lifestyle, and medication.",
      },
      {
        name: "Dysphagia (swallowing difficulty)",
        description:
          "Sensation of food sticking or pain on swallowing; evaluated to rule out infection, inflammation, or other causes.",
      },
      {
        name: "Snoring & sleep-disordered breathing",
        description:
          "Enlarged tonsils/adenoids or palate issues contributing to snoring; assessment and surgical options when appropriate.",
      },
    ],
    symptoms: [
      "Sore throat or pain on swallowing",
      "Hoarseness or voice fatigue lasting more than 2 weeks",
      "Feeling of a lump in the throat",
      "Chronic dry cough or throat clearing",
      "Recurring tonsil infections",
      "Snoring, restless sleep, or pauses in breathing (children)",
      "Difficulty swallowing solids or liquids",
    ],
    treatments: [
      "Throat examination and flexible laryngoscopy when indicated",
      "Antibiotics and supportive care for infections",
      "Voice therapy referral and reflux management",
      "Tonsillectomy and adenoidectomy",
      "Microlaryngoscopy for vocal cord lesions",
      "Counselling on vocal hygiene and follow-up care",
    ],
    whenToVisit: [
      "Hoarseness lasting more than 2–3 weeks",
      "Recurrent tonsil infections (several per year)",
      "Difficulty swallowing or unintentional weight loss",
      "Snoring with gasping or daytime sleepiness in a child",
      "Persistent throat pain without improvement on treatment",
    ],
  },
];

export const earSubTreatments: Treatment[] = [
  {
    slug: "chronic-otitis-media-treatment",
    parent: "ear",
    title: "Chronic Otitis Media Treatment",
    shortDescription:
      "Long-term middle ear infection management to prevent hearing loss and complications.",
    description:
      "Persistent middle ear infection care to protect hearing and prevent complications from chronic ear disease.",
    overview: [
      "Chronic otitis media (COM) is a long-standing infection or inflammation of the middle ear. It may present with recurring discharge, hearing loss, or a perforated eardrum.",
      "Without proper treatment, COM can lead to permanent hearing impairment, spread of infection, or damage to structures in the middle ear and mastoid bone.",
      "Dr. Vasun Batra assesses the type of COM (active, inactive, with or without cholesteatoma risk) and plans medical care or surgery such as tympanoplasty or mastoidectomy when necessary.",
    ],
    conditions: [
      {
        name: "Safe chronic otitis media",
        description: "Central perforation with discharge controlled by cleaning and topical treatment.",
      },
      {
        name: "Unsafe / cholesteatoma-suspect disease",
        description: "Requires urgent specialist assessment and often surgical intervention.",
      },
    ],
    symptoms: [
      "Persistent or recurring ear discharge",
      "Hearing loss in the affected ear",
      "Perforated tympanic membrane",
      "History of multiple ear surgeries or infections",
    ],
    treatments: [
      "Aural toilet (microscopic ear cleaning)",
      "Topical antibiotic drops",
      "Hearing aids or rehabilitation when surgery is deferred",
      "Tympanoplasty to repair the eardrum",
      "Mastoid surgery for extensive disease",
    ],
    whenToVisit: [
      "Ear discharge persisting beyond acute infection",
      "Known perforated eardrum with recurrent symptoms",
      "Progressive hearing loss in one ear",
    ],
  },
  {
    slug: "tinnitus-treatment",
    parent: "ear",
    title: "Tinnitus Treatment",
    shortDescription:
      "Evaluation and management of ringing or buzzing sounds in the ear.",
    description:
      "Personalised tinnitus evaluation and management to reduce distress and address underlying ear conditions.",
    overview: [
      "Tinnitus is the perception of sound — ringing, buzzing, or humming — without an external source. It may affect one or both ears and can disturb sleep and concentration.",
      "Common associated factors include hearing loss, noise exposure, ear wax, middle ear disease, and stress. A full ENT and hearing evaluation helps identify treatable causes.",
      "While there is no single cure for all tinnitus, many patients improve with treatment of underlying ear disease, sound therapy, counselling, and lifestyle modifications.",
    ],
    conditions: [
      {
        name: "Subjective tinnitus",
        description: "Sound heard only by the patient; most common form.",
      },
      {
        name: "Pulsatile tinnitus",
        description: "Rhythmic sound matching heartbeat; requires targeted investigation.",
      },
    ],
    symptoms: [
      "Ringing, buzzing, or hissing in the ears",
      "Sensitivity to everyday sounds (hyperacusis)",
      "Sleep disturbance or anxiety",
      "Associated hearing loss or dizziness",
    ],
    treatments: [
      "ENT examination and pure-tone audiometry",
      "Wax removal or treatment of middle ear pathology",
      "Sound generators and masking strategies",
      "Tinnitus retraining and stress management counselling",
      "Referral for associated vertigo or sudden hearing loss",
    ],
    whenToVisit: [
      "New-onset tinnitus in one ear only",
      "Tinnitus with sudden hearing loss or vertigo",
      "Pulsatile (heartbeat-like) tinnitus",
      "Tinnitus significantly affecting sleep or mood",
    ],
  },
  {
    slug: "serous-otitis-media-treatment",
    parent: "ear",
    title: "Serous Otitis Media Treatment",
    shortDescription:
      "Treatment for fluid buildup behind the eardrum, common in children and adults.",
    description:
      "Glue ear (fluid in the middle ear) treatment to restore hearing — especially important in children.",
    overview: [
      "Serous otitis media, also called otitis media with effusion or glue ear, occurs when fluid collects in the middle ear without acute infection. It is very common in young children after colds or ear infections.",
      "Fluid dampens vibration of the eardrum and ossicles, causing muffled hearing. In children, this may affect speech and learning if prolonged.",
      "Management includes observation, treating contributing factors (adenoids, allergies), and grommet insertion to ventilate the middle ear when fluid persists.",
    ],
    conditions: [
      {
        name: "Acute otitis media with effusion",
        description: "Fluid after an ear infection; often resolves within weeks.",
      },
      {
        name: "Chronic otitis media with effusion",
        description: "Fluid lasting months; may need grommets or adenoid treatment.",
      },
    ],
    symptoms: [
      "Muffled hearing or asking to repeat speech",
      "Feeling of fullness in the ear",
      "Poor school performance or inattentiveness (children)",
      "Balance problems in young children",
    ],
    treatments: [
      "Watchful waiting with scheduled follow-up",
      "Autoinflation techniques where appropriate",
      "Adenoid assessment in children",
      "Myringotomy and grommet (ventilation tube) insertion",
      "Hearing testing and speech monitoring in paediatric cases",
    ],
    whenToVisit: [
      "Suspected hearing loss in a child after a cold",
      "Fluid confirmed on examination for more than 3 months",
      "Speech delay or behavioural concerns related to hearing",
    ],
  },
  {
    slug: "acute-otitis-media-treatment",
    parent: "ear",
    title: "Acute Otitis Media Treatment",
    shortDescription:
      "Prompt treatment for sudden middle ear infections causing pain and fever.",
    description:
      "Fast, effective care for sudden painful ear infections in infants, children, and adults.",
    overview: [
      "Acute otitis media is a sudden bacterial or viral infection of the middle ear, often following an upper respiratory infection. It is especially common in children under 5 years.",
      "Typical features include ear pain, irritability, fever, and temporary hearing reduction. Prompt diagnosis prevents complications such as ruptured eardrum or mastoid involvement.",
      "Dr. Vasun Batra provides appropriate antibiotic therapy when indicated, pain control, and follow-up to ensure complete resolution.",
    ],
    conditions: [
      {
        name: "Uncomplicated acute otitis media",
        description: "Middle ear infection without mastoid spread; treated medically.",
      },
      {
        name: "Recurrent acute otitis media",
        description: "Multiple episodes in a season; may need preventive strategies or grommets.",
      },
    ],
    symptoms: [
      "Sharp or throbbing ear pain",
      "Fever and general unwellness",
      "Pulling at the ear (infants)",
      "Irritability, poor feeding, or disturbed sleep",
      "Temporary hearing loss",
    ],
    treatments: [
      "Pain relievers (paracetamol/ibuprofen as appropriate)",
      "Antibiotics when clinically indicated",
      "Review after 48–72 hours if not improving",
      "Myringotomy for severe bulging drum or complications",
      "Discussion of preventive options for recurrent cases",
    ],
    whenToVisit: [
      "Severe ear pain, especially in a young child",
      "Fever with ear symptoms",
      "No improvement after 48 hours of treatment",
      "Swelling or redness behind the ear",
    ],
  },
];

export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return [...mainTreatments, ...earSubTreatments].find((t) => t.slug === slug);
}

export function getEarSubTreatments() {
  return earSubTreatments;
}

export function getRelatedTreatments(slug: string): Treatment[] {
  const current = getTreatmentBySlug(slug);
  if (!current) return [];
  if (current.parent === "ear" || slug === "ear-treatment") {
    return slug === "ear-treatment"
      ? earSubTreatments
      : [mainTreatments[0], ...earSubTreatments.filter((t) => t.slug !== slug)];
  }
  if (slug.includes("nose")) {
    return mainTreatments.filter((t) => t.slug !== slug);
  }
  if (slug.includes("throat")) {
    return mainTreatments.filter((t) => t.slug !== slug);
  }
  return mainTreatments.filter((t) => t.slug !== slug).slice(0, 3);
}
