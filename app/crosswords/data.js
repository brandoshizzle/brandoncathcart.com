import React from 'react';
import { Grid2X2Icon, Grid3X3Icon, SquareIcon } from "lucide-react";
const size = 32;

export const crosswords = [
	{
		title: "Mini (5x5)",
		icon: <SquareIcon size={size} />,
		crosswords: [
			{
				name: "[Lou Bega voice] Combo #5",
				date: "2025-01-20",
				src: "https://crosshare.org/crosswords/Fr2LStzDaKZmqC7DQIDB/lou-bega-voice-combo-5",
				featured: false
			},
			{
				name: "Pesky Plumbers",
				date: "2025-01-19",
				src: "https://crosshare.org/crosswords/GLey0tf44uyOb6FIjHcw/pesky-plumbers",
				featured: false
			},
		]
	},
	{
		title: "Midi (9x9 to 11x11)",
		icon: <Grid2X2Icon size={size} />,
		crosswords: [
			{
				name: "Holy Cow",
				date: "2025-01-06",
				src: "https://crosshare.org/crosswords/tzcjlEivHNItKN1TGECi/midi-8-holy-cow",
				featured: false
			},
			{
				name: "Snake Voice",
				date: "2024-11-18",
				src: "https://crosshare.org/crosswords/PXLJi0wzFi9P88l51UYf/midi-6-snake-voice",
				featured: true
			},
		]
	},
	{
		title: "Full (15x15)",
		icon: <Grid3X3Icon size={size} />,
		crosswords: [
			{
				name: "Power Struggles",
				date: "2025-01-28",
				src: "https://crosshare.org/crosswords/t98vNErxWbxGGXWdpT1u/power-struggles",
				featured: false
			},
			{
				name: "They've Got That Secret Sauce",
				date: "2025-01-21",
				src: "https://crosshare.org/crosswords/xS8kAw3BV6K9DKa10IZ8/theyve-got-that-secret-sauce",
				featured: false
			},
			{
				name: "Don't You Think?",
				date: "2024-07-17",
				src: "https://crosshare.org/crosswords/8CZrliYnJd3CmopZwsta/dont-you-think",
				featured: false
			},

		]
	}
]