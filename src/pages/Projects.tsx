import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SectionTitle } from "@/components/SectionTitle";
import { ProjectCard } from "@/components/ProjectCard";
import heroImage from "@/assets/hero-construction.jpg";
import projectRoad from "@/assets/project-road.jpg";
import projectBuilding from "@/assets/project-building.jpg";
import projectBridge from "@/assets/project-bridge.jpg";

const projects = [
  {
    image: projectRoad,
    title: "Autoroute Nationale N1",
    category: "Routes",
    location: "Cotonou - Porto-Novo",
    description:
      "Construction de 45 km d'autoroute à 2x2 voies reliant les deux plus grandes villes du Bénin.",
  },
  {
    image: projectBuilding,
    title: "Centre Commercial Étoile",
    category: "Bâtiments",
    location: "Cotonou, Bénin",
    description:
      "Complexe commercial moderne de 25 000 m² avec parking souterrain et espaces verts.",
  },
  {
    image: projectBridge,
    title: "Pont de l'Ouémé",
    category: "Génie Civil",
    location: "Ouémé, Bénin",
    description:
      "Ouvrage d'art de 850 mètres traversant le fleuve Ouémé, facilitant le transport régional.",
  },
  {
    image: projectBuilding,
    title: "Siège Social BCEAO",
    category: "Bâtiments",
    location: "Cotonou, Bénin",
    description:
      "Immeuble de bureaux haut de gamme de 12 étages avec certification environnementale.",
  },
  {
    image: projectRoad,
    title: "Boulevard de la Marina",
    category: "Routes",
    location: "Cotonou, Bénin",
    description:
      "Réaménagement urbain complet incluant voies de circulation, pistes cyclables et espaces piétons.",
  },
  {
    image: projectBridge,
    title: "Échangeur de Godomey",
    category: "Génie Civil",
    location: "Abomey-Calavi, Bénin",
    description:
      "Échangeur à plusieurs niveaux améliorant la fluidité du trafic dans la zone périurbaine.",
  },
];

const categories = ["Tous", "Bâtiments", "Routes", "Génie Civil"];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="ZNH BTP Projects"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-construction-charcoal via-construction-charcoal/95 to-background" />
        </div>

        <div className="relative z-10 container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary font-semibold text-sm uppercase tracking-wider rounded-full mb-6">
              Nos Réalisations
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
              Projets Emblématiques
            </h1>
            <p className="text-xl text-muted-foreground">
              Découvrez notre portfolio de projets qui témoignent de notre
              expertise et de notre engagement envers l'excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-border/50">
        <div className="container-wide">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  index === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-construction-charcoal" />
        <div className="relative z-10 container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Votre Projet Pourrait Être le Prochain
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Confiez-nous votre vision et nous la transformerons en réalité
              avec le même niveau d'excellence et de dévouement.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="font-semibold text-lg px-8 py-6 shadow-amber"
              >
                Démarrer Votre Projet
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
