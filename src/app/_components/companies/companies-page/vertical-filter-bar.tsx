"use client";
import { Card } from "@tremor/react";
import { useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useEffect } from "react";

interface Filter {
  valuation: string;
  industry: string;
  region: string;
}

const VerticalFilterBar = () => {
  const [showMoreRegions, setShowMoreRegions] = useState(false);
  const [filter, setFilter] = useState<Filter>({
    valuation: "all",
    industry: "all",
    region: "all",
  });
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    const queryFunction = () => {
      const query = new URLSearchParams(searchParams.toString());
      query.set("filters", JSON.stringify(filter));
      void router.push(`${pathname}?${query.toString()}`);
    };
    queryFunction();
  }, [filter, pathname, router, searchParams]);

  return (
    <div className="hidden p-2 lg:block">
      <Card className="max-w-[200px] rounded xl:max-w-[250px]">
        <div className="relative h-full">
          <div className="scrollbar-hide h-[400px] overflow-auto lg:h-[600px] xl:h-[800px]">
            {/* Valuation */}
            <div className="flex flex-col py-2">
              <h2 className="text-md font-semibold">Valuation</h2>
              <div>
                <input
                  type="checkbox"
                  id="all-valuation"
                  checked={filter.valuation === "all"}
                  onChange={(e) => setFilter({ ...filter, valuation: "all" })}
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
                  checked={filter.valuation === "+5b"}
                  onChange={(e) => setFilter({ ...filter, valuation: "+5b" })}
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
                  checked={filter.valuation === "1-5b"}
                  onChange={(e) => setFilter({ ...filter, valuation: "1-5b" })}
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
                  checked={filter.valuation === "500m-1b"}
                  onChange={(e) =>
                    setFilter({ ...filter, valuation: "500m-1b" })
                  }
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
                  checked={filter.valuation === "100-500m"}
                  onChange={(e) =>
                    setFilter({ ...filter, valuation: "100-500m" })
                  }
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
                  checked={filter.valuation === "50-100m"}
                  onChange={(e) =>
                    setFilter({ ...filter, valuation: "50-100m" })
                  }
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
                  checked={filter.valuation === "<50m"}
                  onChange={(e) => setFilter({ ...filter, valuation: "<50m" })}
                />
                <label htmlFor="less-50m" className="ml-2">
                  &lt;50m
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="na"
                  className="accent-indigo-500"
                  checked={filter.valuation === "N/A"}
                  onChange={(e) => setFilter({ ...filter, valuation: "N/A" })}
                />
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
                  checked={filter.industry === "all"}
                  onChange={(e) => setFilter({ ...filter, industry: "all" })}
                  className="accent-indigo-500"
                />
                <label htmlFor="all-industry" className="ml-2">
                  All
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="ai"
                  className="accent-indigo-500"
                  checked={filter.industry === "AI"}
                  onChange={(e) => setFilter({ ...filter, industry: "AI" })}
                />
                <label htmlFor="ai" className="ml-2">
                  AI
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="fintech"
                  className="accent-indigo-500"
                  checked={filter.industry === "FinTech"}
                  onChange={(e) =>
                    setFilter({ ...filter, industry: "FinTech" })
                  }
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
                  checked={filter.industry === "FrontierTech"}
                  onChange={(e) =>
                    setFilter({ ...filter, industry: "FrontierTech" })
                  }
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
                  checked={filter.industry === "HealthTech"}
                  onChange={(e) =>
                    setFilter({ ...filter, industry: "HealthTech" })
                  }
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
                  checked={filter.industry === "Crypto"}
                  onChange={(e) => setFilter({ ...filter, industry: "Crypto" })}
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
                  checked={filter.industry === "Consumer"}
                  onChange={(e) =>
                    setFilter({ ...filter, industry: "Consumer" })
                  }
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
                  checked={filter.industry === "DevTools"}
                  onChange={(e) =>
                    setFilter({ ...filter, industry: "DevTools" })
                  }
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
                  checked={filter.industry === "Food & AgTech"}
                  onChange={(e) =>
                    setFilter({ ...filter, industry: "Food & AgTech" })
                  }
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
                  checked={filter.industry === "Hardware"}
                  onChange={(e) =>
                    setFilter({ ...filter, industry: "Hardware" })
                  }
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
                  checked={filter.region === "all"}
                  onChange={(e) => setFilter({ ...filter, region: "all" })}
                />
                <label htmlFor="all-region" className="ml-2">
                  All
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="sf"
                  className="accent-indigo-500"
                  checked={filter.region === "SF"}
                  onChange={(e) => setFilter({ ...filter, region: "SF" })}
                />
                <label htmlFor="sf" className="ml-2">
                  SF
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="nyc"
                  className="accent-indigo-500"
                  checked={filter.region === "NYC"}
                  onChange={(e) => setFilter({ ...filter, region: "NYC" })}
                />
                <label htmlFor="nyc" className="ml-2">
                  NYC
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="austin"
                  className="accent-indigo-500"
                  checked={filter.region === "Austin"}
                  onChange={(e) => setFilter({ ...filter, region: "Austin" })}
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
                  checked={filter.region === "Boston"}
                  onChange={(e) => setFilter({ ...filter, region: "Boston" })}
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
                  checked={filter.region === "Miami"}
                  onChange={(e) => setFilter({ ...filter, region: "Miami" })}
                />
                <label htmlFor="miami" className="ml-2">
                  Miami
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="us"
                  className="accent-indigo-500"
                  checked={filter.region === "US"}
                  onChange={(e) => setFilter({ ...filter, region: "US" })}
                />
                <label htmlFor="us" className="ml-2">
                  US
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="europe"
                  className="accent-indigo-500"
                  checked={filter.region === "Europe"}
                  onChange={(e) => setFilter({ ...filter, region: "Europe" })}
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
                      checked={filter.region === "LatAm"}
                      onChange={(e) =>
                        setFilter({ ...filter, region: "LatAm" })
                      }
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
                      checked={filter.region === "MENA"}
                      onChange={(e) => setFilter({ ...filter, region: "MENA" })}
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
                      checked={filter.region === "Canada"}
                      onChange={(e) =>
                        setFilter({ ...filter, region: "Canada" })
                      }
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
                      checked={filter.region === "SEA"}
                      onChange={(e) => setFilter({ ...filter, region: "SEA" })}
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
                      checked={filter.region === "India"}
                      onChange={(e) =>
                        setFilter({ ...filter, region: "India" })
                      }
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
                      checked={filter.region === "Pakistan"}
                      onChange={(e) =>
                        setFilter({ ...filter, region: "Pakistan" })
                      }
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
                      checked={filter.region === "UK"}
                      onChange={(e) => setFilter({ ...filter, region: "UK" })}
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
                      checked={filter.region === "Brazil"}
                      onChange={(e) =>
                        setFilter({ ...filter, region: "Brazil" })
                      }
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
                      checked={filter.region === "Mexico"}
                      onChange={(e) =>
                        setFilter({ ...filter, region: "Mexico" })
                      }
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
