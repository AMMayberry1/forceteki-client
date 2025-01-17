import { CardData } from "@/app/_components/_sharedcomponents/Cards/CardTypes";

export type ParticipantType = "player" | "opponent";

export interface Participant {
	id: string;
	name: string;
	type: ParticipantType;
	initiative: boolean | null;
	deckSize: number;
	cards: CardData[];
	fullDeck: CardData[];
}

export interface ChatDrawerProps {
	sidebarOpen: boolean;
	toggleSidebar: () => void;
	chatHistory: string[];
	chatMessage: string;
	setChatMessage: React.Dispatch<React.SetStateAction<string>>;
	handleChatSubmit: () => void;
	currentRound: number;
}

export interface PlayerCardTrayProps {
	trayPlayer: string;
	handleModalToggle: () => void;
	handleBasicPromptToggle: () => void;
}

export interface OpponentCardTrayProps {
	trayPlayer: string;
}

export interface BoardProps {
	sidebarOpen: boolean;
}

export type DeckSize = number;
export interface DeckDiscardProps {
	deckSize: DeckSize;
}

export interface ResourcesProps {
	trayPlayer: string;
	handleModalToggle?: () => void;
}

export interface ResourcesOverlayProps {
	isModalOpen: boolean;
	handleModalToggle: () => void;
}

export interface BasicPromptProps {
	isBasicPromptOpen: boolean;
	handleBasicPromptToggle: () => void;
}

export interface CardAreaProps {
	cards: CardData[];
}

export interface UnitsBoardProps {
	sidebarOpen: boolean;
	arena: string;
}

export interface PlayerHandProps {
	cards: CardData[];
}