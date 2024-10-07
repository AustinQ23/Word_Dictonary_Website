export default function Info({ name, data }) {
  return !data || !name ? (
    <p></p>
  ) : !data[0]?.phonetics || !data[0]?.meanings ? (
    <p>No data for {name}</p>
  ) : (
    <div>
      <h2>Word: {data[0].word}</h2>
      {data[0].phonetics && (
        <div>
          <h3>Phonetics:</h3>
          <ul>
            {data[0].phonetics
              .filter((phonetic) => phonetic.text && phonetic.audio) // Ensure both text and audio exist
              .map((phonetic, index) => (
                <li key={index}>
                  <p>
                    <strong>Text</strong>: {phonetic.text}
                  </p>
                  {phonetic.audio && (
                    <audio controls>
                      <source src={phonetic.audio} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  )}
                </li>
              ))}
          </ul>
        </div>
      )}
      {data[0].meanings && (
        <div>
          <h3>Meanings:</h3>
          {data[0].meanings.map((meaning, index) => (
            <div key={index}>
              <h4>Part of Speech: {meaning.partOfSpeech}</h4>
              <ul>
                {meaning.definitions.slice(0, 4).map((definition, defIndex) => (
                  <li key={defIndex}>
                    <p>
                      <strong>Definition</strong>: {definition.definition}
                    </p>
                    {definition.example && (
                      <p>
                        <em>Example:</em> {definition.example}
                      </p>
                    )}
                    {definition.synonyms && definition.synonyms.length > 0 && (
                      <p>
                        <strong>Synonyms</strong>:{" "}
                        {definition.synonyms.join(", ")}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
