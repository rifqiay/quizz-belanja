import { Accordion, Progress } from "flowbite-react";
import React from "react";
import Input from "../../base/input/Input";

const Accordions = ({ data }) => {
  const origin = data.reduce(
    (acc, item) => ({ ...acc, [item.origin]: (acc[item.origin] || 0) + 1 }),
    {}
  );
  const species = data.reduce(
    (acc, item) => ({ ...acc, [item.species]: (acc[item.species] || 0) + 1 }),
    {}
  );

  const roastLevel = data.reduce(
    (acc, item) => ({
      ...acc,
      [item.roast_level]: (acc[item.roast_level] || 0) + 1,
    }),
    {}
  );
  const tasted = data.reduce(
    (acc, item) => ({
      ...acc,
      [item.tasted]: (acc[item.tasted] || 0) + 1,
    }),
    {}
  );
  const processing = data.reduce(
    (acc, item) => ({
      ...acc,
      [item.processing]: (acc[item.processing] || 0) + 1,
    }),
    {}
  );
  return (
    <>
      <Accordion alwaysOpen={true}>
        <Accordion.Panel>
          <Accordion.Title>URUTKAN BERDASARKAN</Accordion.Title>
          <Accordion.Content>
            <div className="mb-3">
              <h1 className="font-bold text-lg mb-1">Harga</h1>
              <Progress progress={45} />
              <div className="flex gap-3 my-4">
                <div className="flex">
                  <span className="my-auto font-semibold">Rp </span>
                  <Input
                    placeholder="2.000"
                    className="w-20 mx-1 p-2 focus:outline-none rounded-md shadow-md font-semibold"
                  />
                </div>
                <span className="my-auto font-bold text-2xl">-</span>
                <div className="flex">
                  <span className="my-auto font-semibold">Rp </span>
                  <Input
                    placeholder="5.000"
                    className="w-20 mx-1 p-2 focus:outline-none rounded-md shadow-md font-semibold"
                  />
                </div>
              </div>
            </div>
            {/* origin */}
            <Accordion alwaysOpen={true}>
              <Accordion.Panel>
                <Accordion.Title>Origin</Accordion.Title>
                <Accordion.Content>
                  {Object.entries(origin).map(([key, val]) => (
                    <div className="flex justify-between">
                      <div className="flex gap-2">
                        <input
                          type="checkbox"
                          id={key}
                          className="my-auto"
                          name={key}
                        />
                        <label htmlFor={key} className="my-auto cursor-pointer">
                          {key}
                        </label>
                      </div>
                      <p>({val})</p>
                    </div>
                  ))}
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
            {/* species */}
            <Accordion alwaysOpen={true}>
              <Accordion.Panel>
                <Accordion.Title>Species</Accordion.Title>
                <Accordion.Content>
                  {Object.entries(species).map(([key, val]) => (
                    <div className="flex justify-between">
                      <div className="flex gap-2">
                        <input
                          type="checkbox"
                          id={key}
                          className="my-auto"
                          name={key}
                        />
                        <label htmlFor={key} className="my-auto cursor-pointer">
                          {key}
                        </label>
                      </div>
                      <p>({val})</p>
                    </div>
                  ))}
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
            {/* roast level */}
            <Accordion alwaysOpen={true}>
              <Accordion.Panel>
                <Accordion.Title>Roast level</Accordion.Title>
                <Accordion.Content>
                  {Object.entries(roastLevel).map(([key, val]) => (
                    <div className="flex justify-between">
                      <div className="flex gap-2">
                        <input
                          type="checkbox"
                          id={key}
                          className="my-auto"
                          name={key}
                          onChange={(e) => {
                            let isChecked = e.target.checked;
                            if (isChecked) {
                              // setFilterSpecies(e.target.name);
                              alert(e.target.name);
                            } else {
                              // setFilterSpecies("");
                            }
                          }}
                        />
                        <label htmlFor={key} className="my-auto cursor-pointer">
                          {key}
                        </label>
                      </div>
                      <p>({val})</p>
                    </div>
                  ))}
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
            {/* tasted */}
            <Accordion alwaysOpen={true}>
              <Accordion.Panel>
                <Accordion.Title>Tasted</Accordion.Title>
                <Accordion.Content>
                  {Object.entries(tasted).map(([key, val]) => (
                    <div className="flex justify-between">
                      <div className="flex gap-2">
                        <input
                          type="checkbox"
                          id={key}
                          className="my-auto"
                          name={key}
                        />
                        <label htmlFor={key} className="my-auto cursor-pointer">
                          {key}
                        </label>
                      </div>
                      <p>({val})</p>
                    </div>
                  ))}
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
            {/* processing */}
            <Accordion alwaysOpen={true}>
              <Accordion.Panel>
                <Accordion.Title>Processing</Accordion.Title>
                <Accordion.Content>
                  {Object.entries(processing).map(([key, val]) => (
                    <div className="flex justify-between">
                      <div className="flex gap-2">
                        <input
                          type="checkbox"
                          id={key}
                          className="my-auto"
                          name={key}
                        />
                        <label htmlFor={key} className="my-auto cursor-pointer">
                          {key}
                        </label>
                      </div>
                      <p>({val})</p>
                    </div>
                  ))}
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </>
  );
};

export default Accordions;
