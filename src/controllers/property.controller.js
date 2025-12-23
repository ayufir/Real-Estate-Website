import { properties } from "../models/property.model";

export const getAllProperties = () => properties;

export const getPropertyById = (id) =>
  properties.find((p) => p.id === id);
