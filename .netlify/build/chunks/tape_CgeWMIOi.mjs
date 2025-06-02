const tape = new Proxy({"src":"/_astro/tape.DKBANkfm.webp","width":466,"height":466,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/assets/tape.webp";
							}
							
							return target[name];
						}
					});

export { tape as t };
