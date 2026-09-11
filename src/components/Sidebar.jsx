import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Home,
  Sparkles,
  Images,
  Video,
  Phone,
  Star,
  MapPin,
  CalendarDays,
} from "lucide-react";

import "./Sidebar.css";

export default function Sidebar({ isOpen, onClose }) {
  const menuItems = [
    { name: "Accueil", icon: Home, target: "top" },
    { name: "La Foire", icon: Sparkles, target: "presentation" },
    { name: "Galerie", icon: Images, target: "gallery" },
    { name: "Vidéos", icon: Video, target: "videos" },
  ];

  const infoItems = [
    { name: "Contacts", icon: Phone, target: "contacts" },
    { name: "Invités", icon: Star, target: "guests" },
    { name: "Lieu", icon: MapPin, target: "location" },
    { name: "Programme", icon: CalendarDays, target: "program" },
  ];

  const handleNavigation = (target) => {
    if (target === "top") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      document.getElementById(target)?.scrollIntoView({
        behavior: "smooth",
      });
    }

    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="sidebar-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.aside
            className="sidebar"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              damping: 28,
              stiffness: 260,
            }}
          >
            <div className="sidebar-header">
              <div className="sidebar-logo">NSAMFE</div>

              <button
                className="close-button"
                onClick={onClose}
                aria-label="Fermer le menu"
              >
                <X size={25} />
              </button>
            </div>

            <nav className="sidebar-nav">
              {menuItems.map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.name}
                    className="sidebar-item"
                    onClick={() => handleNavigation(item.target)}
                  >
                    <Icon size={20} />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </nav>

            <div className="sidebar-info">
              <p className="sidebar-title">
                AUTRES INFORMATIONS
              </p>

              {infoItems.map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.name}
                    className="sidebar-item"
                    onClick={() => handleNavigation(item.target)}
                  >
                    <Icon size={20} />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>

            <div className="sidebar-footer">
              <p>Foire de Nkongsamba</p>
              <span>NSAMFE</span>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
