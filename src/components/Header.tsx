"use client";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";
import { Settings, Github, History, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGlobalStore } from "@/store/global";
import { useState } from "react";

const ThemeToggle = dynamic(() => import("@/components/Theme/ToggleButton"));

const VERSION = process.env.NEXT_PUBLIC_VERSION;

function Header() {
  const { t } = useTranslation();
  const { setOpenSetting, setOpenHistory } = useGlobalStore();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center my-6">
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full bg-gray-800 text-white shadow-lg transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 z-50`}
          style={{ width: "250px" }}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-700">
            <h1 className="text-xl font-bold">
              {t("title")}
              <small className="ml-2 font-normal text-sm">v{VERSION}</small>
            </h1>
            <Button
              className="h-8 w-8"
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X className="h-5 w-5 text-white" />
            </Button>
          </div>
          <div className="p-4 space-y-4">
            <Button
              className="w-full justify-start"
              variant="ghost"
              onClick={() => setOpenHistory(true)}
            >
              <History className="h-5 w-5 mr-2" />
              {t("research.history.title")}
            </Button>
          </div>
          <div className="absolute bottom-4 left-4">
            <a href="https://github.com/RohanSai22" target="_blank">
              <Button className="h-8 w-8" variant="ghost" size="icon">
                <Github className="h-5 w-5 text-white" />
              </Button>
            </a>
          </div>
        </div>

        {/* Sidebar Toggle Button */}
        {!isSidebarOpen && (
          <Button
            className="fixed top-4 left-4 z-50"
            variant="ghost"
            size="icon"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        )}

        <a href="https://github.com/RohanSai22/" target="_blank">
          <h1 className="text-center text-2xl font-bold">
            {t("title")}
            <small className="ml-2 font-normal text-base">v{VERSION}</small>
          </h1>
        </a>
        <div className="flex gap-1">
          <ThemeToggle />
          <a href="https://github.com/RohanSai22/" target="_blank">
            <Button className="h-8 w-8" variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
          </a>
          <Button
            className="h-8 w-8"
            variant="ghost"
            size="icon"
            onClick={() => setOpenSetting(true)}
          >
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </header>
    </>
  );
}

export default Header;
