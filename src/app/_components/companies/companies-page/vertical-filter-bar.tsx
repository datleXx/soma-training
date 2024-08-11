"use client";
import { Card } from "@tremor/react";
import { useState } from "react";

const VerticalFilterBar = () => {
  const [showMoreRegions, setShowMoreRegions] = useState(false);
  // const [showMoreSchool, setShowMoreSchool] = useState(false);

  return (
    <div className="hidden p-2 lg:block">
      <Card className="max-w-[200px] rounded xl:max-w-[250px]">
        <div className="relative h-full">
          <div className="h-[400px] lg:h-[600px] xl:h-[800px] scrollbar-hide overflow-auto">
            {/* View Type */}
            <div className="flex flex-col py-2">
              <h2 className="text-md font-semibold">View Type</h2>
              <div>
                <input
                  type="checkbox"
                  id="company"
                  defaultChecked
                  className="accent-indigo-500"
                />
                <label htmlFor="company" className="ml-2">
                  Company
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="activities"
                  className="accent-indigo-500"
                />
                <label htmlFor="activities" className="ml-2">
                  Activities
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="help-soma-companies"
                  className="accent-indigo-500"
                />
                <label htmlFor="help-soma-companies" className="ml-2">
                  Help Soma Companies
                </label>
              </div>
            </div>

            {/* Company Type */}
            <div className="flex flex-col py-2">
              <h2 className="text-md font-semibold">Company Type</h2>
              <div>
                <input
                  type="checkbox"
                  id="portfolio"
                  defaultChecked
                  className="accent-indigo-500"
                />
                <label htmlFor="portfolio" className="ml-2">
                  Portfolio
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="network"
                  className="accent-indigo-500"
                />
                <label htmlFor="network" className="ml-2">
                  Network
                </label>
              </div>
            </div>

            {/* Valuation */}
            <div className="flex flex-col py-2">
              <h2 className="text-md font-semibold">Valuation</h2>
              <div>
                <input
                  type="checkbox"
                  id="all-valuation"
                  defaultChecked
                  className="accent-indigo-500"
                />
                <label htmlFor="all-valuation" className="ml-2">
                  All
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="plus-5b"
                  className="accent-indigo-500"
                />
                <label htmlFor="plus-5b" className="ml-2">
                  +5b
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="1-5b"
                  className="accent-indigo-500"
                />
                <label htmlFor="1-5b" className="ml-2">
                  1-5b
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="500m-1b"
                  className="accent-indigo-500"
                />
                <label htmlFor="500m-1b" className="ml-2">
                  500m-1b
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="100-500m"
                  className="accent-indigo-500"
                />
                <label htmlFor="100-500m" className="ml-2">
                  100-500m
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="50-100m"
                  className="accent-indigo-500"
                />
                <label htmlFor="50-100m" className="ml-2">
                  50-100m
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="less-50m"
                  className="accent-indigo-500"
                />
                <label htmlFor="less-50m" className="ml-2">
                  &lt;50m
                </label>
              </div>
              <div>
                <input type="checkbox" id="na" className="accent-indigo-500" />
                <label htmlFor="na" className="ml-2">
                  N/A
                </label>
              </div>
            </div>

            {/* Industry */}
            <div className="flex flex-col py-2">
              <h2 className="text-md font-semibold">Industry</h2>
              <div>
                <input
                  type="checkbox"
                  id="all-industry"
                  defaultChecked
                  className="accent-indigo-500"
                />
                <label htmlFor="all-industry" className="ml-2">
                  All
                </label>
              </div>
              <div>
                <input type="checkbox" id="ai" className="accent-indigo-500" />
                <label htmlFor="ai" className="ml-2">
                  AI
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="fintech"
                  className="accent-indigo-500"
                />
                <label htmlFor="fintech" className="ml-2">
                  FinTech
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="frontiertech"
                  className="accent-indigo-500"
                />
                <label htmlFor="frontiertech" className="ml-2">
                  FrontierTech
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="healthtech"
                  className="accent-indigo-500"
                />
                <label htmlFor="healthtech" className="ml-2">
                  HealthTech
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="crypto"
                  className="accent-indigo-500"
                />
                <label htmlFor="crypto" className="ml-2">
                  Crypto
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="consumer"
                  className="accent-indigo-500"
                />
                <label htmlFor="consumer" className="ml-2">
                  Consumer
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="devtools"
                  className="accent-indigo-500"
                />
                <label htmlFor="devtools" className="ml-2">
                  DevTools
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="food-agtech"
                  className="accent-indigo-500"
                />
                <label htmlFor="food-agtech" className="ml-2">
                  Food & AgTech
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="hardware"
                  className="accent-indigo-500"
                />
                <label htmlFor="hardware" className="ml-2">
                  Hardware
                </label>
              </div>
            </div>

            {/* Region */}
            <div className="flex flex-col py-2">
              <h2 className="text-md font-semibold">Region</h2>
              <div>
                <input
                  type="checkbox"
                  id="all-region"
                  defaultChecked
                  className="accent-indigo-500"
                />
                <label htmlFor="all-region" className="ml-2">
                  All
                </label>
              </div>
              <div>
                <input type="checkbox" id="sf" className="accent-indigo-500" />
                <label htmlFor="sf" className="ml-2">
                  SF
                </label>
              </div>
              <div>
                <input type="checkbox" id="nyc" className="accent-indigo-500" />
                <label htmlFor="nyc" className="ml-2">
                  NYC
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="austin"
                  className="accent-indigo-500"
                />
                <label htmlFor="austin" className="ml-2">
                  Austin
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="boston"
                  className="accent-indigo-500"
                />
                <label htmlFor="boston" className="ml-2">
                  Boston
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="miami"
                  className="accent-indigo-500"
                />
                <label htmlFor="miami" className="ml-2">
                  Miami
                </label>
              </div>
              <div>
                <input type="checkbox" id="us" className="accent-indigo-500" />
                <label htmlFor="us" className="ml-2">
                  US
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="europe"
                  className="accent-indigo-500"
                />
                <label htmlFor="europe" className="ml-2">
                  Europe
                </label>
              </div>
              {showMoreRegions ? (
                <div>
                  <div>
                    <input
                      type="checkbox"
                      id="latam"
                      className="accent-indigo-500"
                    />
                    <label htmlFor="latam" className="ml-2">
                      LatAm
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="mena"
                      className="accent-indigo-500"
                    />
                    <label htmlFor="mena" className="ml-2">
                      MENA
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="canada"
                      className="accent-indigo-500"
                    />
                    <label htmlFor="canada" className="ml-2">
                      Canada
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="sea"
                      className="accent-indigo-500"
                    />
                    <label htmlFor="sea" className="ml-2">
                      SEA
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="india"
                      className="accent-indigo-500"
                    />
                    <label htmlFor="india" className="ml-2">
                      India
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="pakistan"
                      className="accent-indigo-500"
                    />
                    <label htmlFor="pakistan" className="ml-2">
                      Pakistan
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="uk"
                      className="accent-indigo-500"
                    />
                    <label htmlFor="uk" className="ml-2">
                      UK
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="brazil"
                      className="accent-indigo-500"
                    />
                    <label htmlFor="brazil" className="ml-2">
                      Brazil
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="mexico"
                      className="accent-indigo-500"
                    />
                    <label htmlFor="mexico" className="ml-2">
                      Mexico
                    </label>
                  </div>
                </div>
              ) : (
                ""
              )}
              <div
                onClick={() => setShowMoreRegions(!showMoreRegions)}
                className="mt-2 cursor-pointer text-sm text-indigo-500 underline"
              >
                {!showMoreRegions ? "Show more" : "Show less"}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default VerticalFilterBar;
