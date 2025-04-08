// utils/SettingsLoader.js
"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setAuthPages,
  setGlobalSettings,
} from "../features/student/auth/settingsSlice";

export default function SettingsLoader({ authPages, settings }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (authPages) {
      dispatch(setAuthPages(authPages));
    }
  }, [authPages, dispatch]);

  useEffect(() => {
    if (settings) {
      dispatch(setGlobalSettings(settings));
    }
  }, [settings, dispatch]);

  return null;
}
