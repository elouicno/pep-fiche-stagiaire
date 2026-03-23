import { useState } from "react";
import {
  Search,
  Star,
  PlusCircle,
  Home,
  HelpCircle,
  Settings,
  Bell,
  ChevronDown,
  ChevronUp,
  Pencil,
  X,
  Check,
  MoreHorizontal,
  Menu,
  ExternalLink,
  ChevronRight,
  MapPin,
  FileText,
  Users,
  Layers,
} from "lucide-react";

// ============================================================
// DATA
// ============================================================
const STAGIAIRE = {
  nom: "Clemence BUYSSE",
  statut: "",
  dureeStage: "2 ans",
};

const DATES_STAGE = {
  duree: "2 ans",
  dateDebut: "",
  dateFin: "",
};

const EMPLOYEUR = {
  employeur: "SAINT MARCOUX CATHERINE",
  denominationSociale: "SAINT MARCOUX CATHERINE",
  siret: "37783312400001",
  adresse: "113 RUE DAMREMONT\n75018 PARIS\nFrance",
  conseilRegional: "Île-de-France",
  typeStructure:
    "En cabinet d'expertise comptable ou dans une société d'expertise-comptable",
};

const MODALITES = {
  typeInscription: "Une première inscription au stage d'expertise comptable",
  localisationGeographique: "En France métropolitaine & DROM",
  demandeReduction:
    "Oui, en raison de mon expérience en cabinet (3 ans au cours des 5 dernières années)",
  stageTempsPartiel: "Oui",
  typeEmploi:
    "Salarié d'entreprise (Fonction de Direction ou de Contrôle d'au moins 3 ans)",
};

const AUTRES_INFOS = {
  stagiaire: "Clemence BUYSSE",
  isActif: true,
  dateLimiteAvantSuspension: "",
  dscg: "",
  statutDuStagiaire: "",
  dossier: "",
  ficheStagiaireName: "Clemence BUYSSE",
  uniteEnseignement: "",
};

const SYSTEM_INFO = {
  creePar: "Permanent idf",
  dateCreation: "06/03/2026 14:48",
  derniereModifPar: "Permanent idf",
  dateModif: "06/03/2026 14:48",
};

const OBLIGATIONS = [
  { nom: "Rapport de stage - Année 1 - Semestre 1", statut: "À venir" },
  { nom: "Rapport de stage - Année 1 - Semestre 2", statut: "À venir" },
  { nom: "Rapport de stage - Année 2 - Semestre 1", statut: "À venir" },
  { nom: "Rapport de stage - Année 2 - Semestre 2", statut: "À venir" },
  { nom: "Fiche annuelle travaux - Année 1", statut: "À venir" },
  { nom: "Fiche annuelle travaux - Année 2", statut: "À venir" },
  { nom: "Entretien - de deuxième année", statut: "À venir" },
];

const TABS = [
  { id: "fiches", label: "Fiches Stagiaires", icon: "list", closable: false },
  { id: "demande", label: "00001355 | Demande", icon: "doc", closable: true },
  {
    id: "maitre",
    label: "Maître de stage | Co...",
    icon: "grid",
    closable: true,
  },
  {
    id: "clemence",
    label: "Clemence BUYSSE |...",
    icon: "diamond",
    closable: true,
    active: true,
  },
];

// ============================================================
// COMPONENTS
// ============================================================

// Sidebar
const Sidebar = () => {
  return (
    <div className="w-[52px] bg-[#1B2A4A] flex flex-col items-center min-h-screen flex-shrink-0">
      {/* Logo */}
      <div className="w-[52px] h-[48px] flex items-center justify-center bg-[#2D4A7A] mt-0">
        <div className="w-[30px] h-[30px] rounded-[4px] bg-white flex items-center justify-center">
          <span
            style={{
              fontWeight: 800,
              fontSize: "10px",
              color: "#1B2A4A",
              letterSpacing: "-0.5px",
            }}
          >
            pep
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center mt-1 text-[9px] text-white/80 tracking-tight leading-tight text-center px-1">
        <span>PEP</span>
      </div>

      {/* Nav items */}
      <div className="flex flex-col items-center mt-6 gap-4">
        <SidebarItem label="DevOps Center" active={false} />
        <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center">
          <MoreHorizontal size={16} className="text-white/70" />
        </div>
        <SidebarItem label="Plus" active={false} />
      </div>
    </div>
  );
};

const SidebarItem = ({ label, active }) => (
  <div className="flex flex-col items-center gap-0.5 cursor-pointer">
    <div
      className={`w-8 h-8 rounded flex items-center justify-center ${active ? "bg-white/20" : "hover:bg-white/10"}`}
    >
      <Layers size={14} className="text-white/70" />
    </div>
    <span className="text-[8px] text-white/60 text-center leading-tight">
      {label}
    </span>
  </div>
);

// Secondary sidebar with PEP branding
const SecondarySidebar = () => (
  <div className="w-[120px] bg-[#1E3456] flex flex-col items-center pt-3 flex-shrink-0 min-h-screen border-r border-[#2A4570]">
    <div className="flex items-center gap-2 px-3 mb-4">
      <div className="w-[28px] h-[28px] rounded bg-white flex items-center justify-center flex-shrink-0">
        <span
          style={{
            fontWeight: 800,
            fontSize: "9px",
            color: "#1B2A4A",
            letterSpacing: "-0.3px",
          }}
        >
          pep
        </span>
      </div>
      <div className="flex flex-col">
        <span
          className="text-white font-bold text-[13px]"
          style={{ letterSpacing: "-0.3px" }}
        >
          pep
        </span>
        <span className="text-white/50 text-[7px] leading-tight">
          plateforme
          <br />
          d'exercice
          <br />
          professionnel
        </span>
      </div>
    </div>
    <div className="w-full px-3">
      <span className="text-white/80 text-[11px] font-medium">PEP</span>
    </div>
  </div>
);

// Top tab bar
const TabBar = ({ tabs }) => (
  <div className="h-[36px] bg-white border-b border-[#D5D5D5] flex items-end px-0 overflow-hidden flex-shrink-0">
    {tabs.map((tab, i) => (
      <div
        key={tab.id}
        className={`flex items-center gap-1.5 px-3 h-[32px] text-[12px] cursor-pointer border-r border-[#E0E0E0] flex-shrink-0 ${
          tab.active
            ? "bg-white border-t-2 border-t-[#0176D3] text-[#0176D3] font-medium"
            : "bg-[#F3F3F3] text-[#444] hover:bg-[#E8E8E8]"
        }`}
      >
        {tab.icon === "list" && (
          <Menu size={12} className="text-[#706E6B] flex-shrink-0" />
        )}
        {tab.icon === "doc" && (
          <FileText size={12} className="text-[#706E6B] flex-shrink-0" />
        )}
        {tab.icon === "grid" && (
          <Users size={12} className="text-[#706E6B] flex-shrink-0" />
        )}
        {tab.icon === "diamond" && (
          <div className="w-3 h-3 bg-[#0176D3] rotate-45 rounded-[1px] flex-shrink-0" />
        )}
        <span className="whitespace-nowrap">{tab.label}</span>
        <ChevronDown size={10} className="text-[#706E6B] flex-shrink-0" />
        {tab.closable && (
          <X size={11} className="text-[#706E6B] hover:text-[#333] flex-shrink-0" />
        )}
      </div>
    ))}
  </div>
);

// Header bar with search and icons
const HeaderBar = () => (
  <div className="h-[44px] bg-[#1B2A4A] flex items-center px-4 gap-3 flex-shrink-0">
    {/* Search */}
    <div className="flex-1 max-w-[400px] mx-auto relative">
      <Search
        size={14}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
      />
      <input
        type="text"
        placeholder="Rechercher..."
        className="w-full h-[30px] bg-[#2D4A7A] rounded-[4px] pl-9 pr-3 text-[13px] text-white placeholder-white/40 border border-[#3A5A8A] focus:outline-none focus:border-[#5A8ABF]"
      />
    </div>
    {/* Right icons */}
    <div className="flex items-center gap-1">
      <HeaderIcon>
        <Star size={16} />
      </HeaderIcon>
      <HeaderIcon>
        <PlusCircle size={16} />
      </HeaderIcon>
      <HeaderIcon>
        <Home size={16} />
      </HeaderIcon>
      <HeaderIcon>
        <HelpCircle size={16} />
      </HeaderIcon>
      <HeaderIcon>
        <Settings size={16} />
      </HeaderIcon>
      <HeaderIcon>
        <Bell size={16} />
      </HeaderIcon>
      {/* Avatar */}
      <div className="w-[26px] h-[26px] rounded-full bg-[#E87461] flex items-center justify-center ml-1 cursor-pointer">
        <span className="text-white text-[11px] font-medium">U</span>
      </div>
    </div>
  </div>
);

const HeaderIcon = ({ children }) => (
  <div className="w-[30px] h-[30px] rounded flex items-center justify-center text-white/70 hover:bg-white/10 cursor-pointer">
    {children}
  </div>
);

// Collapsible Section
const CollapsibleSection = ({ title, children, defaultOpen = true }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="mb-2">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 w-full py-2 text-left border-b border-[#D5D5D5] hover:bg-[#F5F5F5] transition-colors"
      >
        {open ? (
          <ChevronDown size={16} className="text-[#706E6B]" />
        ) : (
          <ChevronRight size={16} className="text-[#706E6B]" />
        )}
        <span className="text-[14px] font-medium text-[#080707]">
          {title}
        </span>
      </button>
      {open && <div className="pt-3 pb-1">{children}</div>}
    </div>
  );
};

// Form field row
const FieldRow = ({ label, value, editable = false, isLink = false, isCheck = false }) => (
  <div className="flex items-start py-[6px] min-h-[32px]">
    <div className="w-[120px] flex-shrink-0 text-[12px] text-[#444] pr-3 pt-[2px]">
      {label}
    </div>
    <div className="flex-1 flex items-start gap-2">
      {isCheck ? (
        <Check size={16} className="text-[#2E844A]" />
      ) : isLink ? (
        <a
          href="#"
          className="text-[12px] text-[#0176D3] hover:underline"
          onClick={(e) => e.preventDefault()}
        >
          {value}
        </a>
      ) : (
        <span className="text-[12px] text-[#080707] leading-relaxed">
          {value}
        </span>
      )}
      {editable && (
        <Pencil
          size={13}
          className="text-[#706E6B] hover:text-[#444] cursor-pointer flex-shrink-0 mt-[1px]"
        />
      )}
    </div>
  </div>
);

// Two column field
const FieldRow2Col = ({
  label1,
  value1,
  label2,
  value2,
  editable1 = false,
  editable2 = false,
  isLink1 = false,
  isLink2 = false,
}) => (
  <div className="flex items-start py-[6px] min-h-[32px]">
    <div className="w-[120px] flex-shrink-0 text-[12px] text-[#444] pr-3 pt-[2px]">
      {label1}
    </div>
    <div className="w-[200px] flex-shrink-0 flex items-start gap-2">
      {isLink1 ? (
        <a
          href="#"
          className="text-[12px] text-[#0176D3] hover:underline"
          onClick={(e) => e.preventDefault()}
        >
          {value1}
        </a>
      ) : (
        <span className="text-[12px] text-[#080707]">{value1}</span>
      )}
      {editable1 && (
        <Pencil
          size={13}
          className="text-[#706E6B] hover:text-[#444] cursor-pointer flex-shrink-0"
        />
      )}
    </div>
    <div className="w-[110px] flex-shrink-0 text-[12px] text-[#444] pr-3 pt-[2px]">
      {label2}
    </div>
    <div className="flex-1 flex items-start gap-2">
      {isLink2 ? (
        <a
          href="#"
          className="text-[12px] text-[#0176D3] hover:underline"
          onClick={(e) => e.preventDefault()}
        >
          {value2}
        </a>
      ) : (
        <span className="text-[12px] text-[#080707] leading-relaxed">
          {value2}
        </span>
      )}
      {editable2 && (
        <Pencil
          size={13}
          className="text-[#706E6B] hover:text-[#444] cursor-pointer flex-shrink-0"
        />
      )}
    </div>
  </div>
);

// Obligations card
const ObligationsCard = () => {
  const [expanded, setExpanded] = useState(true);
  return (
    <div className="w-[280px] flex-shrink-0 bg-white border border-[#D5D5D5] rounded-[8px] shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#E5E5E5]">
        <div className="flex items-center gap-2">
          <div className="w-[28px] h-[28px] rounded-full bg-[#0176D3] flex items-center justify-center">
            <FileText size={14} className="text-white" />
          </div>
          <span className="text-[14px] font-medium text-[#080707]">
            Obligations (7)
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-[24px] h-[24px] rounded flex items-center justify-center hover:bg-[#F0F0F0]"
          >
            {expanded ? (
              <ChevronDown size={14} className="text-[#706E6B]" />
            ) : (
              <ChevronUp size={14} className="text-[#706E6B]" />
            )}
          </button>
        </div>
      </div>
      {/* Items */}
      {expanded && (
        <div className="px-4 py-2">
          {OBLIGATIONS.map((obl, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-[8px] border-b border-[#F0F0F0] last:border-b-0"
            >
              <div className="flex-1 min-w-0">
                <a
                  href="#"
                  className="text-[12px] text-[#0176D3] hover:underline block truncate"
                  onClick={(e) => e.preventDefault()}
                >
                  {obl.nom}
                </a>
                <span className="text-[11px] text-[#706E6B]">
                  Statut: &nbsp;&nbsp;&nbsp;{obl.statut}
                </span>
              </div>
              <ChevronDown
                size={14}
                className="text-[#706E6B] flex-shrink-0 ml-2"
              />
            </div>
          ))}
          <div className="pt-2 pb-1 text-right">
            <a
              href="#"
              className="text-[12px] text-[#0176D3] hover:underline"
              onClick={(e) => e.preventDefault()}
            >
              Afficher tout
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

// Map placeholder
const MapPlaceholder = () => (
  <div className="w-[240px] h-[140px] bg-[#E8E8E0] rounded border border-[#D0D0D0] relative overflow-hidden mt-1">
    {/* Simulated map */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#E8E8D8] to-[#D8D8C8]">
      {/* Roads */}
      <div className="absolute top-[30%] left-0 right-0 h-[2px] bg-[#FFF] opacity-80" />
      <div className="absolute top-[50%] left-0 right-0 h-[1px] bg-[#FFF] opacity-60" />
      <div className="absolute top-[70%] left-0 right-0 h-[1px] bg-[#FFF] opacity-60" />
      <div className="absolute top-0 bottom-0 left-[30%] w-[2px] bg-[#FFF] opacity-80" />
      <div className="absolute top-0 bottom-0 left-[60%] w-[1px] bg-[#FFF] opacity-60" />
      {/* Labels */}
      <span className="absolute top-[15%] left-[8%] text-[8px] text-[#555] font-medium">
        PORTE DE
      </span>
      <span className="absolute top-[22%] left-[8%] text-[8px] text-[#555] font-medium">
        SAINT-OUEN
      </span>
      <span className="absolute top-[15%] right-[8%] text-[8px] text-[#555] font-medium">
        PO
      </span>
      <span className="absolute top-[22%] right-[5%] text-[8px] text-[#555] font-medium">
        CLIGN
      </span>
      <span className="absolute top-[40%] left-[5%] text-[7px] text-[#777]">
        Rue Neveu
      </span>
      <span className="absolute top-[55%] left-[25%] text-[7px] text-[#777]">
        Rue Leibniz
      </span>
      <span className="absolute top-[35%] left-[20%] text-[7px] text-[#888]">
        Gds Boulevards
      </span>
      {/* Pin */}
      <div className="absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-full">
        <div className="relative">
          <MapPin size={24} className="text-[#E53E3E]" fill="#E53E3E" />
          <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-[8px] h-[8px] bg-[#fff] rounded-full" />
        </div>
      </div>
    </div>
  </div>
);

// ============================================================
// MAIN APP
// ============================================================
export default function FicheStagiaire() {
  const [activeTab, setActiveTab] = useState("stage");

  return (
    <div
      className="flex h-screen w-full overflow-hidden"
      style={{ fontFamily: "'Salesforce Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}
    >
      {/* Left sidebar */}
      <Sidebar />
      <SecondarySidebar />

      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#F3F3F3]">
        {/* Top header */}
        <HeaderBar />
        {/* Tab bar */}
        <TabBar tabs={TABS} />

        {/* Content */}
        <div className="flex-1 overflow-y-auto bg-[#F3F3F3]">
          {/* Page header */}
          <div className="bg-white border-b border-[#D5D5D5] px-6 pt-4 pb-3">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-[32px] h-[32px] rounded-full bg-[#2E844A] flex items-center justify-center flex-shrink-0 mt-1">
                <Check size={18} className="text-white" />
              </div>
              <div>
                <div className="text-[11px] text-[#706E6B] mb-0.5">
                  Fiche Stagiaire
                </div>
                <h1 className="text-[22px] font-bold text-[#080707] leading-tight">
                  Clemence BUYSSE
                </h1>
              </div>
            </div>

            {/* Compact fields */}
            <div className="flex items-start gap-8 ml-[44px]">
              <div>
                <div className="text-[11px] text-[#706E6B]">Stagiaire</div>
                <a
                  href="#"
                  className="text-[13px] text-[#0176D3] hover:underline"
                  onClick={(e) => e.preventDefault()}
                >
                  Clemence BUYSSE
                </a>
              </div>
              <div>
                <div className="text-[11px] text-[#706E6B]">
                  Statut du stagiaire
                </div>
                <div className="text-[13px] text-[#080707]">&nbsp;</div>
              </div>
              <div>
                <div className="text-[11px] text-[#706E6B]">
                  Durée du stage
                </div>
                <div className="text-[13px] text-[#080707]">2 ans</div>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="flex gap-4 p-4">
            {/* Left content */}
            <div className="flex-1 min-w-0">
              {/* Sub tabs */}
              <div className="bg-white rounded-t-[4px] border border-[#D5D5D5] border-b-0">
                <div className="flex items-end px-4 pt-1">
                  <button
                    onClick={() => setActiveTab("stage")}
                    className={`px-4 py-2 text-[13px] font-medium border-b-[3px] transition-colors ${
                      activeTab === "stage"
                        ? "border-[#0176D3] text-[#0176D3]"
                        : "border-transparent text-[#706E6B] hover:text-[#444]"
                    }`}
                  >
                    Stage
                  </button>
                  <button
                    onClick={() => setActiveTab("mscs")}
                    className={`px-4 py-2 text-[13px] font-medium border-b-[3px] transition-colors ${
                      activeTab === "mscs"
                        ? "border-[#0176D3] text-[#0176D3]"
                        : "border-transparent text-[#706E6B] hover:text-[#444]"
                    }`}
                  >
                    MS-CS
                  </button>
                </div>
              </div>

              {/* Tab content */}
              <div className="bg-white border border-[#D5D5D5] rounded-b-[4px] p-5">
                {activeTab === "stage" && (
                  <>
                    {/* Dates du stage */}
                    <CollapsibleSection title="Dates du stage">
                      <FieldRow
                        label="Durée du stage"
                        value="2 ans"
                        editable
                      />
                      <FieldRow label="Date début" value="" editable />
                      <FieldRow label="Date fin" value="" editable />
                    </CollapsibleSection>

                    {/* Employeur */}
                    <CollapsibleSection title="Employeur">
                      <FieldRow2Col
                        label1="Employeur"
                        value1={EMPLOYEUR.employeur}
                        isLink1
                        label2="Conseil régional de l'ordre"
                        value2={EMPLOYEUR.conseilRegional}
                      />
                      <FieldRow2Col
                        label1="Dénomination sociale"
                        value1={EMPLOYEUR.denominationSociale}
                        label2="Type de structure"
                        value2={EMPLOYEUR.typeStructure}
                      />
                      <FieldRow
                        label="SIRET Employeur"
                        value={EMPLOYEUR.siret}
                      />
                      <div className="flex items-start py-[6px]">
                        <div className="w-[120px] flex-shrink-0 text-[12px] text-[#444] pr-3 pt-[2px]">
                          Adresse Employeur
                        </div>
                        <div className="flex-1">
                          <div className="text-[12px] text-[#080707] whitespace-pre-line leading-relaxed">
                            {EMPLOYEUR.adresse}
                          </div>
                          <MapPlaceholder />
                        </div>
                      </div>
                    </CollapsibleSection>

                    {/* Modalités du stage */}
                    <CollapsibleSection title="Modalités du stage">
                      <FieldRow2Col
                        label1="Type d'inscription"
                        value1={MODALITES.typeInscription}
                        label2="Stage à temps partiel"
                        value2={MODALITES.stageTempsPartiel}
                      />
                      <FieldRow2Col
                        label1="Localisation géographique du stage"
                        value1={MODALITES.localisationGeographique}
                        label2="Type d'emploi principal"
                        value2={MODALITES.typeEmploi}
                      />
                      <FieldRow
                        label="Demande de réduction de stage"
                        value={MODALITES.demandeReduction}
                      />
                    </CollapsibleSection>

                    {/* Autres infos */}
                    <CollapsibleSection title="Autres infos">
                      <FieldRow2Col
                        label1="Stagiaire"
                        value1={AUTRES_INFOS.stagiaire}
                        isLink1
                        editable1
                        label2="Statut du stagiaire"
                        value2=""
                        editable2
                      />
                      <div className="flex items-start py-[6px] min-h-[32px]">
                        <div className="w-[120px] flex-shrink-0 text-[12px] text-[#444] pr-3 pt-[2px]">
                          IsActif
                        </div>
                        <div className="w-[200px] flex-shrink-0 flex items-start gap-2">
                          <Check size={16} className="text-[#2E844A]" />
                          <Pencil
                            size={13}
                            className="text-[#706E6B] hover:text-[#444] cursor-pointer flex-shrink-0"
                          />
                        </div>
                        <div className="w-[110px] flex-shrink-0 text-[12px] text-[#444] pr-3 pt-[2px]">
                          Dossier
                        </div>
                        <div className="flex-1 flex items-start gap-2">
                          <span className="text-[12px] text-[#080707]"></span>
                          <Pencil
                            size={13}
                            className="text-[#706E6B] hover:text-[#444] cursor-pointer flex-shrink-0"
                          />
                        </div>
                      </div>
                      <FieldRow2Col
                        label1="Date limite avant suspension"
                        value1=""
                        editable1
                        label2="Fiche Stagiaire Name"
                        value2="Clemence BUYSSE"
                        editable2
                      />
                      <div className="flex items-start py-[6px] min-h-[32px]">
                        <div className="w-[120px] flex-shrink-0 text-[12px] text-[#444] pr-3 pt-[2px]">
                          DSCG
                        </div>
                        <div className="w-[200px] flex-shrink-0 flex items-start gap-2">
                          <span className="text-[12px] text-[#080707]"></span>
                          <Pencil
                            size={13}
                            className="text-[#706E6B] hover:text-[#444] cursor-pointer flex-shrink-0"
                          />
                        </div>
                        <div className="w-[110px] flex-shrink-0 text-[12px] text-[#444] pr-3 pt-[2px]">
                          Unité d'enseignement
                        </div>
                        <div className="flex-1 flex items-start gap-2">
                          <span className="text-[12px] text-[#080707]"></span>
                          <Pencil
                            size={13}
                            className="text-[#706E6B] hover:text-[#444] cursor-pointer flex-shrink-0"
                          />
                        </div>
                      </div>
                    </CollapsibleSection>

                    {/* System Information */}
                    <CollapsibleSection title="System Information">
                      <FieldRow2Col
                        label1="Créé par"
                        value1={`${SYSTEM_INFO.creePar}, ${SYSTEM_INFO.dateCreation}`}
                        label2="Dernière modification par"
                        value2={`${SYSTEM_INFO.derniereModifPar}, ${SYSTEM_INFO.dateModif}`}
                      />
                    </CollapsibleSection>
                  </>
                )}
                {activeTab === "mscs" && (
                  <div className="py-8 text-center text-[14px] text-[#706E6B]">
                    Aucune donnée MS-CS disponible.
                  </div>
                )}
              </div>
            </div>

            {/* Right panel - Obligations */}
            <ObligationsCard />
          </div>

          {/* Bottom bar */}
          <div className="h-[32px] bg-white border-t border-[#D5D5D5] flex items-center justify-between px-4 mt-auto">
            <div className="flex items-center gap-1.5">
              <PlusCircle size={14} className="text-[#0176D3]" />
              <span className="text-[11px] text-[#0176D3]">organiser</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ExternalLink size={12} className="text-[#706E6B]" />
              <span className="text-[11px] text-[#706E6B]">necette</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
